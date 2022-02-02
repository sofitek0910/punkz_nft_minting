import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
  
const utility = () => (
    <div className="utility-block">
        <div className="text-center">      
            <Link to="/home">
                <img className="go-back" src="./assets/images/back.png"/>
            </Link>
            <img className="utility-title" src="./assets/images/utility-font.png"/>
            <div className="utility-content rubik-font">
                Owning a DEAD PUNKZ, offers exclusive access and benefits to owners!
            </div>
        </div>
        <div className="row utility-tab-block">
            <div className="col-md-3 nav flex-column nav-pills tab-head-block uppercase rubik-font" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="tab-item active" id="v-pills-owner-tab" data-bs-toggle="pill" data-bs-target="#v-pills-owner" role="tab" aria-controls="v-pills-owner" aria-selected="true">ownership</a>
                <a className="tab-item" id="v-pills-deadverse-tab" data-bs-toggle="pill" data-bs-target="#v-pills-deadverse" role="tab" aria-controls="v-pills-deadverse" aria-selected="false">deadverse</a>
                <a className="tab-item" id="v-pills-festival-tab" data-bs-toggle="pill" data-bs-target="#v-pills-festival" role="tab" aria-controls="v-pills-festival" aria-selected="false">dead punkz festival</a>
                <a className="tab-item" id="v-pills-access-tab" data-bs-toggle="pill" data-bs-target="#v-pills-access" role="tab" aria-controls="v-pills-access" aria-selected="false">access</a>
                <a className="tab-item" id="v-pills-giveaways-tab" data-bs-toggle="pill" data-bs-target="#v-pills-giveaways" role="tab" aria-controls="v-pills-giveaways" aria-selected="false">giveaways</a>
                <a className="tab-item" id="v-pills-sandbox-tab" data-bs-toggle="pill" data-bs-target="#v-pills-sandbox" role="tab" aria-controls="v-pills-sandbox" aria-selected="false">sandbox</a>
                <a className="tab-item" id="v-pills-avatars-tab" data-bs-toggle="pill" data-bs-target="#v-pills-avatars" role="tab" aria-controls="v-pills-avatars" aria-selected="false">avatars</a>
            </div>
            <div className="col-md-9 tab-content rubik-font text-center" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-owner" role="tabpanel" aria-labelledby="v-pills-owner-tab">
                    <div className="tab-content-title uppercase">ownership</div>
                    <div className="tab-content-paragraph">
                        Owing a DEAD PUNKZ gives you access to exclusive benefits like giveaways, the deadverse, airdrops and much more.
                    </div>
                    <div className="tab-content-paragraph">
                        The deadverse includes games, real world rpg, clubs, stores, gambling communities, and a community hub to meet 
                        like minded individuals.
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-deadverse" role="tabpanel" aria-labelledby="v-pills-deadverse-tab">
                    <div className="tab-content-title uppercase">deadverse</div>
                    <div className="tab-content-paragraph">
                        The deadverse is the underworld of the metaverse.
                    </div>
                    <div className="tab-content-paragraph">
                        The deadverse includes games, real world rpg, clubs, stores, gambling communities, and a community hub to meet 
                        like minded individuals.
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-festival" role="tabpanel" aria-labelledby="v-pills-festival-tab">
                    <div className="tab-content-title uppercase">dead punkz festival</div>
                    <div className="tab-content-paragraph">
                        Every DEAD PUNK offers exclusive access to real world events like parties, meet-ups, and even Our
                        own annual DP FESTIVAL, with very special guest performers EVERY HALLOWEEN!
                    </div>
                    <div className="tab-content-paragraph">
                        The deadverse includes games, real world rpg, clubs, stores, gambling communities, and a community hub to meet 
                        like minded individuals.
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-access" role="tabpanel" aria-labelledby="v-pills-access-tab">
                    <div className="tab-content-title uppercase">access</div>
                    <div className="tab-content-paragraph">
                        Every DEAD PUNK offers exclusive access to airdrops and the ability to make your DEAD PUNK cooler than it already is.
                    </div>
                    <div className="tab-content-paragraph">
                        After the drop of DEAD PUNKZ every Dead Punk holder that gets an airdrop can combine their dead punkz to 
                        make a new spooky combination
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-giveaways" role="tabpanel" aria-labelledby="v-pills-giveaways-tab">
                    <div className="tab-content-title uppercase">giveaways</div>
                    <div className="tab-content-paragraph">
                        Every DEAD PUNK offers exclusive access to WEEKLY GIVEAWAYS.
                    </div>
                    <div className="tab-content-paragraph">
                        These giveaways can range anywhere from, one free DEAD PUNKZ NFT to 20 ETHEREUM. You can also win free merchandise, other crypto currencies,
                        ticktes to your favorite conerts, all expense paid trips, a ticket to space, and MUCH MORE!
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-sandbox" role="tabpanel" aria-labelledby="v-pills-sandbox-tab">
                    <div className="tab-content-title uppercase">sandbox</div>
                    <div className="tab-content-paragraph">
                        We are currently in the process of purchasing land in SANDBOX, Through the Dead Punkz land you will be allowed to join the real-world
                        DEAD PUNKZ FESTIVAL, buy cool clothes for your meta-avatar, join exclusive hubs, and even be transported to the DEADVERSE.
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-avatars" role="tabpanel" aria-labelledby="v-pills-avatars-tab">
                    <div className="tab-content-title uppercase">avatars</div>
                    <div className="tab-content-paragraph">
                        We are currently in the process of creating META-AVATARS.<br/>
                        YOUR SPOOKY SKELLY, WILL TURN 3-D! You will now be able to roam the DEADVERSE as DEAD PUNK. Many NEW 3D AVATARS OF DIFFERENT DEAD PUNKZ
                        WILL BE CREATED, WHICH ARE ONLY PURCHASABLE. BY CURRENT DEAD PUNKZ HOLDERS.
                    </div>
                </div>
            </div>
        </div>
    </div>
    
)

export default utility