function Account() {

  return (
   
    <div className="bg-gray-200 min-h-screen pt-2 font-mono my-16">
        <div className="container mx-auto">
            <div className="inputs w-full max-w-2xl p-6 mx-auto">
              <div className="bg-darkest rounded-box">
                <h2 className="text-2xl text-lightest m-4 p-4 my-8">Votre compte</h2>
                </div>

                {/* image de profil */}
                <div className="flex sm:flex-wrap" >
                  <div className="avatar mx-5">
                    <div className="w-24 rounded-full">
                      <img src="../../../src/assets/chat.png" />
                    </div>
                  </div>
                  
                  <div>
                    <input type="file" className="file-input w-full max-w-xs my-6 mx-8 bg-lightest text-drakest" />
                  </div>
                </div>



                {/* formulaire  de changements*/}
                <form className="mt-6 border-t border-gray-400 pt-4">
                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full md:w-full px-3 mb-6'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>adresse mail</label>
                            <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email'  required></input>
                        </div>
                        <div className='w-full md:w-full px-3 mb-6 '>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Mot de passe</label>
                            <button className="appearance-none bg-lightest text-darkest px-2 py-1 shadow-sm border border-gray-400 rounded-md ">Changer votre mot de passe</button>
                        </div>
                        
                        
                        <div className="personal w-full border-t border-gray-400 pt-4">
                            <h2 className="text-2xl text-gray-900">Informations personnelles :</h2>
                            <div className="flex items-center justify-between mt-4">
                                <div className='w-full md:w-1/2 px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Prénom</label>
                                    <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required></input>
                                </div>
                                <div className='w-full md:w-1/2 px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Nom</label>
                                    <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required></input>
                                </div>
                            </div>
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Nom d'utilisateur</label>
                                <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required></input>
                            </div>
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                                <textarea className='bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'  required></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button className="appearance-none bg-lightest text-derkest px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3 " type="submit">Enregistrer vos changements</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Account;
