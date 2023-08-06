const Cast =  ({cast})=> {

    return ( 
    <div>
        {
            cast.map(({person , character}) => <div key={person.id}>

                <div>
                    <img src={person.image ? person.image.medium : '/Imagenotfound.png'}/>
                </div>
                <div>
                    {person.name} | {character.name}
                </div>

            </div>)
        }
    </div>
    );
};

export default Cast;