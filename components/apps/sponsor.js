import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa'; // Only import the needed icon

export class Sponsor extends Component {
    constructor() {
        super();
        this.sponsorItems = [
            {
                name: "Sponsor on GitHub",
                icon: <FaGithub size={64} />, // Use React Icons component for GitHub
                url: "https://github.com/sponsors/dnyaneshwarshekade"
            },
            {
                name: "Buy Me a Coffee",
                icon: <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" width={100} height={250} />, // Use the image for coffee
                url: "https://buymeacoffee.com/dnyaneshwarshekade"
            }
        ];
    }

    focusFile = (e) => {
        // icon
        e.target.querySelector('img, svg').classList.toggle("opacity-60");
        // file name
        e.target.querySelector('span').classList.toggle("bg-ub-orange");
    }

    openSponsorLink = (url) => {
        window.open(url, "_blank"); // Open the URL in a new tab
    }

    showSponsorItems = () => {
        return (
            <>
                <div className="flex-grow ml-4 flex flex-wrap items-start content-start justify-start overflow-y-auto windowMainScreen">
                    {
                        this.sponsorItems.map((item, index) => {
                            return (
                                <div key={index} tabIndex="1" onFocus={this.focusFile} onBlur={this.focusFile} className="flex flex-col items-center text-sm outline-none w-16 my-2 mx-4" onClick={() => this.openSponsorLink(item.url)}>
                                    <div className="w-16 h-16 flex items-center justify-center">
                                        {item.icon} {/* Render React Icon or image */}
                                    </div>
                                    <span className="text-center rounded px-0.5">{item.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
                {/* GitHub Sponsor button iframe */}
                <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex'>
                    <iframe src="https://github.com/sponsors/dnyaneshwarshekade/button" title="Sponsor Dnyaneshwarshekade" width={"100%"} height={"100%"}></iframe>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex flex-col bg-ub-cool-grey text-white select-none">
                <div className="flex items-center justify-between w-full bg-ub-warm-grey bg-opacity-40 text-sm">
                    <span className="font-bold ml-2">Sponsor</span>
                </div>
                {this.showSponsorItems()}
            </div>
        )
    }
}

export default Sponsor;

export const displaySponsor = () => {
    return <Sponsor />;
}
