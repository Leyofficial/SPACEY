import './Smile.css'

const Smile = () => {
    return (
        <>
            <div className='smileWrapper'>
            <div className={'smile'}>
                <fieldset className="ui-mood">
                    <label aria-label="happy" className={'happy'}>
                        <input name="mood" type="radio" value="1"/>
                    </label>
                </fieldset>
            </div>
            <div>
                <p className={'empty'}>Basket is empty...</p>
            </div>
            </div>
        </>
    );
};

export default Smile;