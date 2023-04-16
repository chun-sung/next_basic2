export default function Footer() {
    return (
        <>
        <div className="footer">
            2022 SuperStar Portfolio<br />
                All rights reserved.
        </div>
        <style jsx>{`
            .footer {
                position: fixed;
                padding: 10px;
                bottom: 0px;                
                color: white;
                width: 100%;
                text-align: center;
                background: #6aa54f;
            }
        `}</style>
        </>
    )
}