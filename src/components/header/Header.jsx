import Logo from "./Logo";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
        

const Header = () => {
    const StyledHead = styled.section`
        width: 100vw;
        height: 20vh;
        display: flex;
        flex-direction: column;
        background-color: gray;
        background: rgba(255, 255, 255, 1);

    `

    const StyledBodyHead = styled.section`
        width: 100%;
        height: 60%;
      
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        /* background-color: yellow; */

        & input{
            width: 709px;
            height: 60px;
            border: none;
            padding: 20px;
            border-radius: 8px;
            color: var(--dark-gray-3);
            background: var(--light-gray-3);
        }
    
       
    `

    const StyledLinks = styled.section`
        width: 20%; 
        display: flex;
        align-items: center;
        justify-content: space-between;

        & .links-login nav ul{
            display: flex;
            align-items: center;
            gap: 20px;
        }

        
    `


    const StyledLinksMenu = styled.section`
        /* background-color: red; */
        width:35%;
        & nav ul{
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap:10px;
            /* Adicionar a classe active que funcione */
        
            & li .active:hover{
                color: var(--primary);
                text-decoration: underline;
                text-decoration-color: var(--primary);
                font-weight: bold;
            }
        }
        

    `

    return (
        <>
            <StyledHead>
                <StyledBodyHead>

                    <Logo />

                    <IconField iconPosition="right">
                        <InputIcon className="pi pi-search"> </InputIcon>
                        <InputText placeholder="Pesquisar produto ..." />
                    </IconField>

                    <StyledLinks>
                        <section className="links-login">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="#" style={{textDecoration:"underline"}}>Cadastra-se</a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <Button label="Login" style={{ background: 'var(--primary)', width:"114px", height:"40px" }} />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                    </StyledLinks>

                    <nav>
                        <a href="">
                            <i className="pi pi-shopping-cart" style={{ color: 'var(--error)' }}></i>
                        </a>
                    </nav>

                </StyledBodyHead>

                <StyledLinksMenu>
                    <nav>
                        <ul>
                            <li>
                                <NavLink>Home</NavLink>
                            </li>
                            <li>

                                <NavLink>Produtos</NavLink>
                            </li>
                            <li>

                                <NavLink>Categorias</NavLink>
                            </li>
                            <li>

                                <NavLink>Meus pedidos</NavLink>
                            </li>
                        </ul>
                    </nav>
                </StyledLinksMenu>

            </StyledHead>
        </>
    );
}

export default Header;