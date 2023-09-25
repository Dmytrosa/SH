import React, { useState } from "react";
import { useForm } from "react-hook-form";
import q from "../../Assets/Form.module.css"
import b from "../../Assets/Blackbutton.module.css"
import { HeroesApi } from "../../../api/api";
import { ApdatePersonalInfo } from "../../../redux/profileReducer";


export const UpdateForm = (props) => {
    // console.log("UpdateForm",props)
    const [resultat, setResult] = useState(null);
    const [nickname, setnickname] = useState(props.nickname)
    const [real_name, setreal_name] = useState(props.real_name)
    const [origin_description, setorigin_description] = useState(props.origin_description)
    const [catch_phrase, setcatch_phrase] = useState(props.catch_phrase)
    const [superpowers, setsuperpowers] = useState(props.superpowers)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        const nickname = data.nickname
        const real_name = data.real_name
        const origin_description = data.origin_description
        const catch_phrase = data.catch_phrase
        const superpowers = data.superpowers

        const contacts = {
            _id: props._id,
            catch_phrase: catch_phrase,
            superpowers: superpowers,
            origin_description: origin_description,
            real_name: real_name,
            nickname: nickname,
        }

        const response = await HeroesApi.PutHero(contacts)
        window.location.reload() //так, бо часу не вистачило відловити баг(

        const result = response.messages
        if (response.data.length != 0) {
            setResult(result)
        } else {
            props.setIsContactsActive(false)
            ApdatePersonalInfo
            (data.nickname,
                 data.real_name,
                  data.origin_description,
                   data.superpowers,
                   data.catch_phrase,
                   )
            reset();
        }

    };

    const onDenyHandler = (e) => {
        e.preventDefault()
        props.setIsContactsActive(false)
    }

    return (
        <div className={q.body}>
            <form className={q.form} onSubmit={handleSubmit(onSubmit)} >
                <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h1 className={q.h1}>Change Info</h1>
                    <label className={q.label} htmlFor="nickname">NickName</label>
                    <input className={q.input}
                        id="nickname"
                        aria-invalid={errors.nickname ? "true" : "false"}
                        {...register("nickname", {
                        })}
                        type="nickname"
                        placeholder="nickname"
                        value={nickname}
                        onChange={(e) => { setnickname(e.target.value) }}
                    />
                    {errors.nickname && <p>{errors.nickname.message2}</p>}
                    {errors.nickname && <span className={q.span} role="alert">{errors.nickname.message}</span>}



                    <label className={q.label} htmlFor="real_name">Real Name</label>
                    <input className={q.input}
                        id="real_name"
                        aria-invalid={errors.real_name ? "true" : "false"}
                        {...register("real_name", {
                        })}
                        type="real_name"
                        placeholder="real_name"
                        value={real_name}
                        onChange={(e) => { setreal_name(e.target.value) }}
                    />
                    {errors.real_name && <p>{errors.real_name.message2}</p>}
                    {errors.real_name && <span className={q.span} role="alert">{errors.real_name.message}</span>}



                    <label className={q.label} htmlFor="origin_description">Origin Description</label>
                    <input className={q.input}
                        id="origin_description"
                        aria-invalid={errors.origin_description ? "true" : "false"}
                        {...register("origin_description", {
                        })}
                        type="origin_description"
                        placeholder="origin_description"
                        value={origin_description}
                        onChange={(e) => { setorigin_description(e.target.value) }}
                    />
                    {errors.origin_description && <p>{errors.origin_description.message2}</p>}
                    {errors.origin_description && <span className={q.span} role="alert">{errors.origin_description.message}</span>}



                    <label className={q.label} htmlFor="superpowers">Superpowers</label>
                    <input className={q.input}
                        id="superpowers"
                        aria-invalid={errors.superpowers ? "true" : "false"}
                        {...register("superpowers", {
                        })}
                        type="superpowers"
                        placeholder="superpowers"
                        value={superpowers}
                        onChange={(e) => { setsuperpowers(e.target.value) }}
                    />
                    {errors.superpowers && <p>{errors.superpowers.message2}</p>}
                    {errors.superpowers && <span className={q.span} role="alert">{errors.superpowers.message}</span>}
                    <label className={q.label} htmlFor="catch_phrase">Catch Phrase</label>
                    <input className={q.input}
                        id="catch_phrase"
                        aria-invalid={errors.catch_phrase ? "true" : "false"}
                        {...register("catch_phrase", {
                        })}
                        type="catch_phrase"
                        placeholder="catch_phrase"
                        value={catch_phrase}
                        onChange={(e) => { setcatch_phrase(e.target.value) }}
                    />
                    {errors.catch_phrase && <p>{errors.catch_phrase.message2}</p>}
                    {errors.catch_phrase && <span className={q.span} role="alert">{errors.catch_phrase.message}</span>}

                </section>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <button className={b.Bbutton} style={{ display: "inline" }} type="submit" >SUBMIT</button>
                    <button className={b.Bbutton} style={{ display: "inline" }} onClick={(e) => { onDenyHandler(e) }}>Close</button>
                </div>
            </form>
        </div>

    );
}