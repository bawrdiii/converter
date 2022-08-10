

const Dynamic = ({
    first,
    firstValue
    , firstOnChange,
    second,
    secondValue,
    secondOnChange
}) => {


    return (
        <article className="card">
            <div className="title">
                <h3>
                    <label htmlFor={first} className="d-flex-title">{first}

                        <input
                            type="number"
                            name="number"
                            id={first}
                            placeholder={first}
                            value={firstValue}
                            onChange={firstOnChange}
                        />
                    </label>
                    <br />
                    <label htmlFor={second} className="d-flex-title" >
                        {second}
                        <input
                            type="number"
                            name="number"
                            id={second}
                            placeholder={second}
                            value={secondValue}
                            onChange={secondOnChange}
                        />
                    </label>
                </h3>
            </div>
        </article>
    )
}

export default Dynamic