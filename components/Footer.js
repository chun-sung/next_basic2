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
                {/* background-color: rgba(0,0,0,0.5); */}
                color: white;
                width: 100%;
                text-align: center;
            }
        `}</style>
        </>
    )
}