export default function Banner() {
    return (
        <div className="banner mt-20">
        <style jsx>{`
            .banner {
                background-image: url('/banner.png');
                background-size: cover;
                background-position: center;
                width:100%;                
                height: 580px;
            }
            @media(max-width: 1024px) {
                .banner {
                    height: 400px;
                }
            }
             @media (max-width: 728px) {
            .banner {
                height: 300px;                
            }
        `}</style>
        </div>
    )
    
}