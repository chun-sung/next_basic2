export default function MobilMenu() {
    return (
        <>
        <div>메뉴</div>
        <style jsx>{`
        div{ 
            background-color: red;
        }
        @media (min-width: 1100px) {
            div {
                display: none
            }
        }

        `}</style>
        </>
    )
}