import FormStyled from "../components/FormStyled";
import { SectionGen } from "../components/ContainersGeneric";
import TempModal from "../components/TempModalStyled";

//Contenedor del formulario de contacto

export default function CreateStyled(){

    return(
        <SectionGen>                        {/* <section> */}
            <FormStyled/>                   {/* Formulario */}
            <TempModal/>                    {/*Modal*/}
        </SectionGen>
    )
}