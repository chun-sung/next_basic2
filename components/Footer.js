export default function Footer() {
    return (
        <>
        <div className="footer bg-amber-600">
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
            }
        `}</style>
        </>
    )
}