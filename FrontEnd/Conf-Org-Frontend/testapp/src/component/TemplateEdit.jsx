import React, { useRef } from 'react';

function TemplateEdit() {
    const emailRefs = {
        newPartnerEmailBody: useRef(null),
        keynoteInvitationEmailBody: useRef(null),
        rseUpdateEmailBody: useRef(null)
    };

    const copyText = (id) => {
        const element = emailRefs[id].current;
        const range = document.createRange();
        const sel = window.getSelection();
    
        range.selectNodeContents(element);
        sel.removeAllRanges();
        sel.addRange(range);
    
        try {
          const successful = document.execCommand('copy');
          const msg = successful ? 'successful' : 'unsuccessful';
          alert('Copy was ' + msg);
        } catch (err) {
          alert('Oops, unable to copy');
        }
    
        // Clear selection if you do not want it to stay highlighted
        window.getSelection().removeAllRanges();
      };

    const composeEmail = (subject, body) => {
        const recipient = ''; // Set recipient if needed
        const mailtoLink = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
    };

    return (
        <div id="emailContent">
            <div id="newPartnerEmail">
                <h1>New Partner Email</h1>
                <p>Click the button below to compose a New Partner email:</p>
                <button onClick={() => copyText('newPartnerEmailBody')}>Select All Text</button>
                <p><button onClick={() => composeEmail('Potential partnership for RSEAA24', '')}>Compose New Partner Email</button></p>
                <div ref={emailRefs.newPartnerEmailBody}>
                    <p>I am writing to you to offer a partnership opportunity for <a href="https://rseaa.github.io">RSEAA24 that is scheduled from the 10th to the 13th of September 2024</a>. This is a joint partnership between the RSE Asia Association and the RSE Australia New Zealand Association. This year’s theme is “Sharing tech architectures”.</p>
                    <br />
                    <p>This is an event to ensure RSEs in Asia and Australia have a say on how they develop the community and to allow them to share their valuable technical and social knowledge of research software with the community.</p>
                    <br />
                    <p>We contacted you because of XYZ.</p>
                    <br />
                    <p>Would you be interested in partnering with us this year?</p>
                    <br />
                    <p>You can find more information about partnerships in our prospectus that is attached.</p>
                    <br />
                    <p>If you would like to support the community in other ways, you could <a href="https://rseaa.github.io/marketing">share the details of RSEAA24</a> via your organisation’s mailing list and encourage attendance from any potential RSEs working for your organisation or people who work with RSEs.</p>
                    <br />
                    <p>Please let me know if you would like to partner with us, or if you have any further ideas you can support the community, or if you have any comments or questions.</p>
                    <br />
                    <p>We appreciate your contribution to the RSE community!</p>
                </div>
            </div>
            <hr />

            <div id="keynoteInvitationEmail">
                <h1>New Keynote Invitation Email</h1>
                <p>Click the button below to compose a Keynote Invitation email:</p>
                <button onClick={() => copyText('keynoteInvitationEmailBody')}>Select All Text</button>
                <p><button onClick={() => composeEmail('Offer of Keynote in September for RSEAA24', '')}>Compose Keynote Invitation Email</button></p>
                <div ref={emailRefs.keynoteInvitationEmailBody}>
                    <p>I am writing to you to offer a keynote opportunity for <a href="https://rseaa.github.io">RSEAA24, the third online Research Software Engineer (RSE) Asia Australia Unconference</a> on the 11th of September 2024 at 1.30pm AEST (<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20240911T0330

">see this link for your timezone</a>).</p>
                    <br />
                    <p>To make it easier to schedule, could you let us know within 3 working days please? We are happy to wait for longer if you need, just let us know.</p>
                    <br />
                    <p>It is scheduled from the 10th to the 13th of September 2024, with a RSE Leaders day on the 10th. This is a joint partnership between the RSE Asia Association and the RSE Australia New Zealand Association. This year’s theme is “Sharing tech architectures”.</p>
                    <br />
                    <p>The keynote is about getting each participant in the mindset to be enthusiastic about meeting each other, share a related tech architecture and get them to think about what they would like to get out of the unconference. We would like the keynote to set the tone for this day by demonstrating those ideas in their keynote.</p>
                    <br />
                    <p>We have chosen you because XYZ</p>
                    <br />
                    <p>If you have other commitments on that day, we completely understand that, we simply wanted to acknowledge your value to the RSE community and provide you with an opportunity to gain further recognition for your value as an RSE.</p>
                    <br />
                    <p>Would you be interested in this keynote? We would be delighted if you would agree - please let us know by replying to this email.</p>
                    <br />
                    <p>We appreciate any support you can provide!</p>
                </div>
            </div>
            <hr />

            <div id="rseUpdateEmail">
                <h1>New RSE Update Email</h1>
                <p>Click the button below to compose an RSE update email:</p>
                <button onClick={() => copyText('rseUpdateEmailBody')}>Select All Text</button>
                <p><button onClick={() => composeEmail('RSE-AUNZ news digest...', '')}>Compose RSE Update Email</button></p>
                <div ref={emailRefs.rseUpdateEmailBody}>
                    <p>Hi All,</p>
                    <br />
                    <p>I thought I would merge all the emails I sent into one news digest this week.</p>
                    <br />
                    <p>Events:</p>
                    <ul>
                        <li><a href="https://www.eventbrite.com.au/e/rse-parkville-lunch-catchup-tickets-628136371797?aff=ebdsoporgprofile&keep_tld=1">RSE Parkville lunch catchup</a> is on this Thursday at 12.30pm at Dr Dax.</li>
                        <li><a href="https://www.eventbrite.co.nz/e/rse-monash-lunch-catchup-tickets-651261549827">RSE Monash lunch catchup</a> is on this Thursday at 12.30pm at Guzman y Gomez.</li>
                        <li><a href="https://meet.google.com/nsj-cetr-beb">RSE online catchup</a> is on this Thursday at 1pm at Guzman y Gomez.</li>
                        <li><a href="https://rseaa.github.io">RSEAA24, the RSE Asia Australia unconference</a> has added an extra day, Tuesday the 10th for an RSE Leaders meeting.</li>
                        <li>All events are on the <a href="https://rse-aunz.github.io/events/">RSE-AUNZ regular networking events page</a>.</li>
                    </ul>
                    <br />
                    <p>News and Articles:</p>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                    <br />
                    <p>Jobs:</p>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                    <p>Please let us know if you have any suggestions!</p>
                </div>
            </div>
        </div>
    );
}

export default TemplateEdit;
