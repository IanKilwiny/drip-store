import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
const Header = () => {
    return (
        // Define o header principal
        <section className="w-full h-10rem flex align-items-center justify-content-center">
            {/* Define um conteiner para melhor alinhamento */}
            <section className="w-11 h-9rem flex flex-column justify-content-around "> 
                {/*Conteiner de logo input e links */}
                <section className="w-full h-5rem flex align-items-center justify-content-around ">
                        
                        <section className="w-auto md:hidden lg:hidden">
                            <span className="pi pi-align-justify"></span>
                        </section>

                        {/*Conteiner logo e input */}
                        <section className="w-8 flex align-itens-center justify-content-around">
                            <Logo/>
                            <InputText
                                className="hidden sm:block lg:w-7 h-4rem "
                                placeholder="Pesquisar produto ..."
                                style={
                                    {
                                        border:"none",
                                        background:"var(--light-gray-3)",
                                        color:"var(--dark-gray-3)"
                                    }
                                }
                            />
                        </section>

                        <nav className="hidden sm:hidden w-2 lg:flex align-items-center justify-content-around">
                            <a href="" className="">Cadastra-se</a>
                            <a href="">
                                <Button 
                                    label="Login" 
                                    style={{backgroundColor:'var(--primary)'}}
                                
                                />
                            </a>
                        </nav>

                        <nav className="w-3rem flex justify-content-between align-items center lg:w-auto">
                            <span className="lg:hidden pi pi-search" style={{color:"var(--light-gray-2)"}}></span>
                            <a href="">
                                <span className="pi pi-shopping-cart" style={{color:"var(--error)"}}></span>
                            </a> 
                        </nav>

                </section>

                {/*Conteiner do menu */}
                <nav className="hidden sm:hidden lg:flex align-items-center gap-5 ml-6">
                        <a href="" className="hover:underline hover:text-pink-700 hover:font-bold">Home</a>
                        <a href="" className="hover:underline hover:text-pink-700 hover:font-bold">Produtos</a>
                        <a href="" className="hover:underline hover:text-pink-700 hover:font-bold">Categorias</a>
                        <a href="" className="hover:underline hover:text-pink-700 hover:font-bold">Meus Pedidos</a>
                </nav>
            </section> 
            
        </section>
    );
}
 
export default Header;