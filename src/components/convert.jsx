import { useState } from "react";
import Dynamic from "./convertdynamic"
import "./converter.css"

const Converter = () => {

    const [megabit, setMegabit] = useState("")
    const [Megabyte, setMegabyte] = useState("")
    const [meter, setMeter] = useState("")
    const [centimeter, setCentimeter] = useState("")
    const [joule, setJoule] = useState("")
    const [kilocalorie, setKilocalorie] = useState("")
    const [millisecond, setMillisecond] = useState("")
    const [second, setSecond] = useState("")

    const ConvertMegabit = (e) => {
        let target = e.target.value
        setMegabit(target)
        const multiply = target * 8
        if (multiply === 0) {
            setMegabyte("")
        } else {
            setMegabyte(multiply)
        }
    }

    const ConvertMegaByte = (e) => {
        let value = e.target.value
        setMegabyte(e.target.value)
        const division = value / 8
        if (division === 0) {
            setMegabit("")
        }
        else {
            setMegabit(division)
        }
    }

    const ConvertCentimeter = (e) => {
        let target = e.target.value
        setCentimeter(target)
        const multiply = target / 100
        if (multiply === 0) {
            setMeter("")
        } else {
            setMeter(multiply)
        }
    }

    const ConvertMeter = (e) => {
        let value = e.target.value
        setMeter(value)
        const division = value * 100
        if (division === 0) {
            setCentimeter("")
        } else {
            setCentimeter(division)
        }
    }

    const ConvertJoule = (e) => {
        let value = e.target.value
        setJoule(value)
        const divisionBe = value / 4184
        const division = divisionBe.toFixed(6)
        if (division === 0) {
            setKilocalorie("")
        } else {
            setKilocalorie(division)
        }
    }

    const ConvertKiloCal = (e) => {
        let value = e.target.value
        setKilocalorie(value)
        const multiply = value * 4184
        if (value === 0) {
            setJoule("")
        }
        else { setJoule(multiply) }
    }

    const ConvertMilisecond = (e) => {
        let value = e.target.value
        setMillisecond(value)
        const division = value / 1000
        if (value === 0) {
            setSecond("")
        }
        else {
            setSecond(division)
        }
    }
    const ConvertSecond = (e) => {
        let value = e.target.value
        setSecond(value)
        const multiply = value * 1000
        if (multiply === 0) {
            setMillisecond("")
        } else { setMillisecond(multiply) }
    }


    return (
        <>
            <div className="container">
                <h2 className="text-upper">converter</h2>
                <section className="d-grid-main">
                    <Dynamic
                        first="Megabit"
                        firstOnChange={ConvertMegabit}
                        firstValue={megabit}
                        second="Megabyte"
                        secondOnChange={ConvertMegaByte}
                        secondValue={Megabyte}
                    />
                    <Dynamic
                        first="Meter"
                        second="Centimeter"
                        firstValue={meter}
                        firstOnChange={ConvertMeter}
                        secondOnChange={ConvertCentimeter}
                        secondValue={centimeter}
                    />
                    <Dynamic
                        first="Joule"
                        second="Kilocalorie"
                        firstValue={joule}
                        firstOnChange={ConvertJoule}
                        secondValue={kilocalorie}
                        secondOnChange={ConvertKiloCal}
                    />

                    <Dynamic
                        first="Millisecond"
                        second="Second"
                        firstValue={millisecond}
                        secondValue={second}
                        firstOnChange={ConvertMilisecond}
                        secondOnChange={ConvertSecond}
                    />

                </section>
            </div>
        </>
    )


}

export default Converter;