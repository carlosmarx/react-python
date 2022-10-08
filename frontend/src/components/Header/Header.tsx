import { HeaderContainer, Logo } from "./Header.style";

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Logo src="/images/myteacher.png" alt="Logo" />
            </div>
            <p>Encontre o professor perfeito!</p>
        </HeaderContainer>
    )
}

export default Header;