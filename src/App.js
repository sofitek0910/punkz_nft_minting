import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [walletAddress, setWallet] = useState("");
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    FINNEY_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    console.log("smartcontract--->", blockchain.smartContract)
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .publicSaleMint()
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 20) {
      newMintAmount = 20;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
    console.log("account===>", blockchain.account)
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth);
    return () => {
        window.removeEventListener('resize', changeWidth)
    }
  }, []);

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div>
        <div className="top-section">
            <div className="top-icon-block">
                <a href="#">
                    <img className="top-icon" src="./assets/images/discord.png"/>
                </a>
                <a href="#">
                    <img className="top-icon" src="./assets/images/instagram.png"/>
                </a>
                <a href="#">
                    <img className="top-icon" src="./assets/images/twitter.png"/>
                </a>
				<a href="#">
                    <img className="top-icon" src="./assets/images/video.png"/>
                </a>
                <a href="#">
                    <img className="top-icon" src="./assets/images/group.png"/>
                </a>
            </div>
        </div>
        
        <header className="navbar-block">
            <nav> 
				<img className="logo-image" src="./assets/images/logo.png"/>
                {(toggleMenu || screenWidth > 1060) && (
                    <div className="menu-block">
                        <ul className="list">
                            <li className="items">Buy</li>
                            <li className="items">Roadmap</li>
                            <li className="items">Team</li>
                            <li className="items">gallery</li>
                            <li className="items">members</li>
                        </ul>
                    </div>
                )}
                <button onClick={toggleNav} className="menu-btn">MENU</button>
            </nav>
        </header>

        <div className="hero-block">
            <img className="hero-image wow rubberBand" src="./assets/images/landing_video1.gif"/>
        </div>
        <section className="welcome-section content-section">
            <div className="row d-flex flex-center">
                <div className="col-md-8 col-sm-12 wow bounceInLeft">
                    <div className="title-font welcome-font">
                        WELCOME TO THE DEAD PUNKZ
                    </div>
                    <div className="content-font1">
                        10,000 High-end, Unique, & Hand-Picked 
                        programmatically generated SPOOKY
                        SKELLY PUNKS brought back to life and
                        encrypted on the ERC-721 blockchain
                        by the DEAD PUNKZ. A community that
                        will blow every other out of the water.
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <img className="cat-gif width-100 wow bounceInRight" src="./assets/images/cat.gif"/>
                </div>
            </div>
        </section>

        <section className="buy-section content-section wow fadeInRight">
            <div className="title-font">BUY</div>
            <div className="row d-flex flex-center">
                <div className="col-md-8 col-sm-12">
                    <div className="content-font1">
                        Every SPOOKY SKELLY PUNK costs .1 eth.There will
                        be a presale for whitelist members, and a public
                        sale following a day after. There will be only 9,980
                        avialble, as 20 will be used for the team, giveaways, 
                        & rewards. 
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 text-center">
                    <button className="mint-btn rubik-font">MINT</button>
                </div>
            </div>
        </section>

        <section className="spec-section content-section  wow fadeInRight">
            <div className="title-font">THE SPECS</div>
            <div className="row d-flex flex-center">
                <div className="col-lg-9 col-md-8 col-sm-12">
                    <div className="content-font2 specs-content-text">
                        Each SPOOKY SKELLY PUNK is unique and programmatically generated from over 200 possible traits, including headwear, mouth pieces, glasses, 
                        and more. All SPOOKY SKELLYS have abilities and traits that make some rarer than others. Every Spooky Skelly is unique and sick. 
                        These DEAD PUNKZ are stored as ERC-721 tokens on the Ethereum blockchain. Check out how rare your skelly is through
                        rarity.tools. To Enter the members only area click on the “Members Only” link or the “Member” tab at the top of the page. 
                        You must be signed into you rmetamask wallet to enter the members club.
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 text-center">
					<div className="row">
						<div className="col-md-12 col-sm-6">
							<a href="#">
								<img className="width-100 club-btn" src="./assets/images/rarity.png"></img>
							</a>
						</div>
						<div className="col-md-12 col-sm-6">
							<a href="#">
								<img className="width-100 club-btn" src="./assets/images/club.png"></img>
							</a>
						</div>
					</div>
                </div>
            </div>
        </section>

        <section className="roadmap-section content-section">
			<div className="wow fadeInRight">
				<div className="title-font">ROADMAP</div>
				<div className="content-font2">
					Our Roadmap catalogs a handful of future utilities and benefits we wish to bring 
					our members as our community develops. Glance over the phases to see a few of the 
					concepts we wish to bring to light and deliver as our project grows. We are constantly 
					integrating new ideas and will evolve to meet the needs of our community to make 
					sure we provide the top meta verse experience
				</div>
			</div>
            
            <div className="row d-flex roadmap-block wow zoomInUp">
                <div className="col-md-6 col-sm-12 text-center">
                    <img className="width-100" src="./assets/images/Roadmap_image.png"/>
                </div>
                <div className="col-md-6 col-sm-12">
					<div className="accordion" id="accordionExample">
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingOne">
								<div className="accordion-button collapsed rubik-font" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
									<button className="phase-btn">phase 1</button> initiation
								</div>
							</h2>
							<div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
								<div className="accordion-body rubik-font">
									This is roadmap answer for intiation one
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingTwo">
								<div className="accordion-button collapsed rubik-font" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									<button className="phase-btn">phase 2</button> reveal
								</div>
							</h2>
							<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
								<div className="accordion-body rubik-font">
									This is the answer for phase 2.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="heading3">
								<div className="accordion-button collapsed rubik-font" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
									<button className="phase-btn">phase 3</button> vamp airdrops
								</div>
							</h2>
							<div id="collapse3" className="accordion-collapse collapse rubik-font" aria-labelledby="heading3" data-bs-parent="#accordionExample">
								<div className="accordion-body rubik-font">
									This is the answer for phase 3.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="heading4">
								<div className="accordion-button collapsed rubik-font" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
									<button className="phase-btn">phase 4</button> DEAD PUNKZ Z
								</div>
							</h2>
							<div id="collapse4" className="accordion-collapse collapse rubik-font" aria-labelledby="heading4" data-bs-parent="#accordionExample">
								<div className="accordion-body rubik-font">
									This is the answer for phase 4.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="heading3">
								<div className="accordion-button collapsed 
								rubik-font" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
									<button className="phase-btn">phase 5</button> mummy airdrops
								</div>
							</h2>
							<div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
								<div className="accordion-body rubik-font">
									This is the answer for phase 5.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="heading6">
								<div className="accordion-button collapsed rubik-font" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
									<button className="phase-btn">phase 6</button> merch realease
								</div>
							</h2>
							<div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
								<div className="accordion-body rubik-font">
									This is the answer for phase 6.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="heading7">
								<div className="accordion-button collapsed rubik-font" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
									<button className="phase-btn">phase 7</button> customization
								</div>
							</h2>
							<div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
								<div className="accordion-body rubik-font">
									This is the answer for phase 7.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="heading8">
								<div className="accordion-button collapsed rubik-font" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
									<button className="phase-btn">phase 8</button> dead punkz festival
								</div>
							</h2>
							<div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
								<div className="accordion-body rubik-font">
									This is the answer for phase 8.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="heading9">
								<div className="accordion-button collapsed rubik-font" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
									<button className="phase-btn">phase 9</button> deadverse beta
								</div>
							</h2>
							<div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample">
								<div className="accordion-body rubik-font">
									This is the answer for phase 9.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="heading10">
								<div className="accordion-button collapsed rubik-font" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
									<button className="phase-btn phase10">phase 10</button> deadverse
								</div>
							</h2>
							<div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordionExample">
								<div className="accordion-body rubik-font">
									This is the answer for phase 10.
								</div>
							</div>
						</div>
					</div>
                </div>
            </div>
        </section>

		<section className="spec-section content-section wow rollIn">
            <div className="title-font">TEAM</div>
            <div className="row d-flex flex-center">
                <div className="col-md-3 col-sm-6">
					<img className="width-100 team-image" src="./assets/images/member1.png"/>
					<div className="member-name">
						coordinate
					</div>
                </div>
				<div className="col-md-3 col-sm-6">
					<img className="width-100 team-image" src="./assets/images/member2.png"/>
					<div className="member-name">
						don
					</div>
                </div>
				<div className="col-md-3 col-sm-6">
					<img className="width-100 team-image" src="./assets/images/member3.png"/>
					<div className="member-name">
						trill
					</div>
                </div>
				<div className="col-md-3 col-sm-6">
					<img className="width-100 team-image" src="./assets/images/member4.png"/>
					<div className="member-name">
						steven
					</div>
                </div>
            </div>
        </section>

		<section className="community-section content-section wow fadeInUp">
            <div className="title-font">JOIN OUR COMMUNITY</div>
            <div className="content-font1">
				Become a part of the community. join our discord for exclusive news, giveaways, fun games,
				and ask any questions about DEAD PUNKZ NFTS.
			</div>
			<div className="join-discord text-center">
				<button className="discord-button rubik-font">
					JOIN DISCORD
				</button>
			</div>
			<div className="smart-contract rubik-font">
				VERIFIED SMART CONTRACT ADDRESS:
			</div>
        </section>

		<section className="bottom-section wow zoomIn">
			<div className="row d-flex flex-center">
                <div className="col-md-4 col-sm-12">
					<div className="subscribe">
						<div className="subscribe-title">GET ON THE LIST</div>
						<div class="mx-0">
							<div class="input-group mb-3 mt-4"> 
								<input type="text" class="form-control" placeholder="EMAIL ADDRESS" aria-label="Recipient's username" aria-describedby="button-addon2"/> 
								<button class="btn btn-success border-rad" type="button" id="button-addon2">&#10132;</button> 
							</div>
						</div>
					</div>
                </div>
				<div className="col-md-4 col-sm-12 bottom-logo-block">
					<img className="width-100 bottom-logo" src="./assets/images/logo.png"/>
                </div>
				<div className="col-md-4 col-sm-12">
					<div className="bottom-icon-section">
						<div className="bottom-icon-block">
							<a href="#">
								<img className="top-icon" src="./assets/images/discord.png"/>
							</a>
							<a href="#">
								<img className="top-icon" src="./assets/images/instagram.png"/>
							</a>
							<a href="#">
								<img className="top-icon" src="./assets/images/twitter.png"/>
							</a>
							<a href="#">
								<img className="top-icon" src="./assets/images/video.png"/>
							</a>
						</div>
					</div>
					<div className="bottom-text-block">
						<div>&#169; 2022 DEAD PUNKZ LLC</div>
						<div>DPTERMS # CONDITIONS</div>
						<div>SSPTERMS # CONDITIONS</div>
						<div>DPZTERMS # CONDITIONS</div>
					</div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default App;
