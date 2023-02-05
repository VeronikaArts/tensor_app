import React from 'react';
import footerStyle from './index.module.css';

const Footer = () => {
   const firstFooterItems = [
        {
            title: 'COMPANY',
            subLinks: [
                'About Last.fm',
                'Contact Us',
                'Jobs',
            ]
        },
        {
            title: 'HELP',
            subLinks: [
                'Track My Music',
                'Community Support',
                'Community Guidelines',
                'Help',
            ]
        },
        {
            title: 'GOODIES',
            subLinks: [
                'Download Scrobbler',
                'Developer API',
                'Free Music Downloads',
                'Merchandise',
            ]
        },
        {
            title: 'ACCOUNT',
            subLinks: [
                'Inbox',
                'Settings',
                'Last.fm Pro',
                'Logout',
            ]
        },
       {
            title: 'FOLLOW US',
            subLinks: [
                'Facebook',
                'Twitter',
                'Instagram',
                'YouTube',
            ]
        }
    ]
    const languages = [
        'English',
        'Deutsch',
        'Español',
        'Français',
        'Italiano',
        '日本語',
        'Polski',
        'Português',
        'Русский',
        'Svenska',
        'Türkçe',
        '简体中文',
    ]
    return (
        <footer className={footerStyle.main}>
            <div className={footerStyle.topRow}>
                {firstFooterItems.map((item)=>
                    <div key={item.title}>
                        <p className={footerStyle.mainLink}>
                            {item.title}
                        </p>
                        <div className={footerStyle.subLinksContainer}>
                            {item.subLinks.map(link=>
                                <a className={footerStyle.subLink} href="">
                                {link}
                                </a>
                            )}
                        </div>
                    </div>
                  )}
            </div>
            <hr/>
            <div className={footerStyle.bottomRow}>
                {languages.map((item)=>
                    <span className={footerStyle.languagesItem}>
                        {item}
                    </span>)}
                <p className={footerStyle.timezone}>Time zone: Europe/Moscow</p>
                <p className={footerStyle.additionalInfo}>CBS Interactive © 2023 Last.fm Ltd. All rights reserved Terms of Use Privacy Policy Legal Policies Cookie Details Jobs at ViacomCBS Last.fm Music</p>
            </div>
        </footer>
    );
};

export default Footer;