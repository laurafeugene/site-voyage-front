function Presentation() {
    return (
        <div className="appliPresentation">
            <div>

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="../src/assets/vacances.png" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                        <h1 className="text-5xl font-bold">Invitez vos compagnons de voyage !</h1>
                        <p className="py-6">Créez un compte et invitez vos amis et votre famille à vous rejoindre dans votre périple ! Chacun pourra participer ou non aux différentes activités programmées, savoir d'un coup d'oeil où dormir, prendre les repas et comment organiser son temps autour des activités programmées !</p>
                        </div>
                    </div>
                </div>

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div>
                        <h1 className="text-5xl font-bold">Gérez votre voyage de chez vous</h1>
                        <p className="py-6">Gérer l'intégralité de votre voyage depuis chez vous. Plannifiez votre destinations, vos étapes au cours de votre voyage, où vous passez vos nuits, où vous allez manger, programmez vos activités et les participants à ces activités.</p>
                        </div>
                        <img src="../src/assets/temps-libre.png" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="../src/assets/comptabilite.png" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                        <h1 className="text-5xl font-bold">Gérez votre Budget</h1>
                        <p className="py-6">Gérez votre budget concernant votre voyage. Renseignez votre budget général et vous obtiendrez ce qu'il vous reste à dépenser. Vous pourrez aussi diviser votre budget par nombre de participants !</p>
                        </div>
                    </div>
                </div>

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        
                        <div>
                        <h1 className="text-5xl font-bold">Partagez vos souvenirs</h1>
                        <p className="py-6">Partagez vos souvenirs en stockant vos plus belles photos de vacances sur notre applications !</p>
                        </div>
                        <img src="../src/assets/des-photos.png" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>


            </div>
        </div>
    );
    }

export default Presentation;