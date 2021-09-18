import React from'react';

const Logo = (props) => {
    return(
        <div>
            <svg width={props.width} height={props.height} viewBox="0 0 303 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M283.056 4.64281C282.321 3.8967 281.013 3.8967 280.277 4.64281L274.229 10.7775L266.791 18.3216L266.627 18.4874L266.464 18.3216L259.107 10.7775L253.059 4.64281C252.323 3.8967 251.015 3.8967 250.28 4.64281L245.621 9.3682C244.885 10.1143 244.885 11.4407 245.621 12.1869L251.751 18.2387L259.107 25.6998L265.156 31.8345C266.055 32.5806 267.363 32.5806 268.262 31.8345L274.311 25.6998L281.667 18.2387L287.715 12.104C288.451 11.3578 288.451 10.0314 287.715 9.2853L283.056 4.64281Z" fill="black"/>
            <path d="M239.981 0.331612H233.442C232.379 0.331612 231.48 2.98446 231.48 6.30053V58.0311C231.48 61.3472 232.379 64 233.442 64H239.981C241.043 64 241.943 61.3472 241.943 58.0311V6.30053C241.943 2.98446 241.043 0.331612 239.981 0.331612Z" fill="black"/>
            <path d="M300.058 0.331612H293.519C292.456 0.331612 291.557 2.98446 291.557 6.30053V58.0311C291.557 61.3472 292.456 64 293.519 64H300.058C301.12 64 302.019 61.3472 302.019 58.0311V6.30053C302.019 2.98446 301.12 0.331612 300.058 0.331612Z" fill="black"/>
            <path d="M1.9617 0.331642H39.8879C40.9505 0.331642 41.8496 1.24356 41.8496 2.32128V8.95341C41.8496 10.0311 40.9505 10.943 39.8879 10.943H1.9617C0.899113 10.943 0 10.0311 0 8.95341V2.32128C0 1.24356 0.899113 0.331642 1.9617 0.331642Z" fill="black"/>
            <path d="M1.9617 21.554H39.8879C40.9505 21.554 41.8496 22.4659 41.8496 23.5436V30.1757C41.8496 31.2534 40.9505 32.1654 39.8879 32.1654H1.9617C0.899113 32.1654 0 31.2534 0 30.1757V23.5436C0 22.4659 0.899113 21.554 1.9617 21.554Z" fill="black"/>
            <path d="M1.9617 42.7767C0.899113 42.7767 0 43.6886 0 44.7663V62.0098C0 63.0875 0.899113 63.9995 1.9617 63.9995H8.5007C9.56329 63.9995 10.4624 63.0875 10.4624 62.0098V44.7663C10.4624 43.6886 9.56329 42.7767 8.5007 42.7767H1.9617Z" fill="black"/>
            <path d="M178.597 0.331612H216.524C217.586 0.331612 218.485 1.24353 218.485 2.32125V8.95337C218.485 10.0311 217.586 10.943 216.524 10.943H178.597C177.535 10.943 176.636 10.0311 176.636 8.95337V2.32125C176.636 1.24353 177.535 0.331612 178.597 0.331612Z" fill="black"/>
            <path d="M178.597 26.8605H216.524C217.586 26.8605 218.485 27.7724 218.485 28.8501V35.4822C218.485 36.5599 217.586 37.4718 216.524 37.4718H178.597C177.535 37.4718 176.636 36.5599 176.636 35.4822V28.8501C176.636 27.7724 177.535 26.8605 178.597 26.8605Z" fill="black"/>
            <path d="M178.597 53.3891H216.524C217.586 53.3891 218.485 54.301 218.485 55.3787V62.0109C218.485 63.0886 217.586 64.0005 216.524 64.0005H178.597C177.535 64.0005 176.636 63.0886 176.636 62.0109V55.3787C176.636 54.301 177.535 53.3891 178.597 53.3891Z" fill="black"/>
            <path d="M96.2869 26.5288C95.3061 26.5288 94.4887 25.7827 94.3252 24.7879C93.3444 16.0832 85.661 9.78267 76.9969 10.7775C69.7222 11.6065 64.0006 17.4096 63.1832 24.7879C63.1015 25.7827 62.2841 26.5288 61.3033 26.5288H54.6825C53.6199 26.5288 52.7208 25.6998 52.7208 24.622C52.7208 24.5391 52.7208 24.5391 52.7208 24.4562C53.8651 9.86557 66.4527 -1.07744 80.8385 0.083182C93.6713 1.078 103.807 11.4407 104.869 24.4562C104.951 25.534 104.134 26.4459 103.071 26.5288C102.989 26.5288 102.989 26.5288 102.908 26.5288H96.2869Z" fill="black"/>
            <path d="M146.31 39.5444C158.162 40.5392 167.562 50.0729 168.461 62.0107C168.542 63.0055 167.807 63.9174 166.744 63.9174C166.662 63.9174 166.662 63.9174 166.581 63.9174H160.45C159.551 63.9174 158.734 63.2542 158.652 62.3423C157.917 55.5444 152.604 50.1558 145.819 49.3267C144.92 49.2438 144.266 48.4148 144.266 47.5029V41.4511C144.266 40.4563 145.084 39.6273 146.065 39.6273C146.228 39.5444 146.228 39.5444 146.31 39.5444Z" fill="black"/>
            <path d="M61.3025 37.4722C62.2834 37.4722 63.1008 38.2183 63.2643 39.2131C64.1634 48.0007 71.9284 54.2183 80.5109 53.3064C87.7855 52.4773 93.5071 46.6742 94.3245 39.296C94.4062 38.3012 95.3053 37.5551 96.2862 37.5551H102.907C103.97 37.5551 104.869 38.3841 104.869 39.4618C104.869 39.5447 104.869 39.5447 104.869 39.6276C103.724 54.2183 91.055 65.0784 76.6692 63.9178C63.9182 62.84 53.701 52.5602 52.7201 39.6276C52.6384 38.5499 53.4557 37.638 54.5183 37.5551C54.6001 37.5551 54.6001 37.5551 54.6818 37.5551H61.3025V37.4722Z" fill="black"/>
            <path d="M136.011 25.6166H128.981C127.919 25.6166 127.02 24.7047 127.02 23.627V12.9327C127.02 11.8549 127.919 10.943 128.981 10.943H136.011C137.073 10.943 137.973 10.0311 137.973 8.95338V2.32125C137.973 1.24353 137.073 0.331612 136.011 0.331612H118.601C117.538 0.331612 116.639 1.24353 116.639 2.32125V62.0104C116.639 63.0881 117.538 64 118.601 64H125.14C126.202 64 127.101 63.0881 127.101 62.0104V37.4715C127.101 36.7254 127.674 36.1451 128.409 36.1451H136.093C137.155 36.1451 138.054 35.2332 138.054 34.1555V27.5233C137.973 26.4456 137.073 25.6166 136.011 25.6166Z" fill="black"/>
            <path d="M144.349 27.3574C144.349 26.4455 145.003 25.6165 145.821 25.4507C149.744 24.6217 152.196 20.7253 151.297 16.746C150.725 13.9274 148.518 11.7719 145.821 11.1916C144.922 11.0258 144.349 10.1968 144.349 9.2849V2.48697C144.349 1.40925 145.249 0.497337 146.311 0.497337C146.393 0.497337 146.475 0.497337 146.556 0.497337C156.201 1.74086 163.067 10.6942 161.841 20.4766C160.86 28.601 154.567 34.9844 146.556 35.9792C145.494 36.145 144.513 35.316 144.349 34.2383C144.349 34.1554 144.349 34.0725 144.349 33.9896V27.3574Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="302.02" height="64" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </div>
    )
}

export default Logo;
