import { Mediting } from "../assets/mediting";

export const HomeHeader = () => {

    return (
        <>
            <div className="zelf-section">
                <div className="zelf-section-header">
                    <div className="zelf-section-header-info">
                        <div className="zelf-logo">Zelf</div>
                        <h1>¡Motivación e información
                            para mejorar tu salud!</h1>
                        <p>"De la inflamación al bienestar" es una guía práctica y basada en evidencia que te ayudará a construir un estilo de vida antiinflamatorio para obtener tu bienestar general.</p>
                    </div>
                    <div className="zelf-section-header-image">
                        <Mediting />
                    </div>
                </div>

                <div className="zelf-section-footer">
                    <h3>Mujeres que se apoyan</h3>
                    <h3>Mejores hábitos</h3>
                    <h3>Viviendo con SOP</h3>
                    <h3>Más energía</h3>
                    <h3>Viviendo sin sintomas</h3>
                </div>

            </div>

        </>

    );
} 
