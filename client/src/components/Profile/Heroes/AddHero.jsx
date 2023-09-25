
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import q from "../../Assets/Form.module.css"
import b from "../../Assets/Blackbutton.module.css"
import axios from "axios"
import { NavLink } from "react-router-dom";
import { HeroesApi } from "../../../api/api";

export const AddHero = (props) => {

    const [pictures, setPictures] = useState([])
    const [nickname, setnickname] = useState(props.profile?.contacts.nickname)
    const [real_name, setreal_name] = useState(props.profile?.contacts.real_name)
    const [origin_description, setorigin_description] = useState(props.profile?.contacts.origin_description)
    const [catch_phrase, setcatch_phrase] = useState(props.profile?.contacts.catch_phrase)
    const [superpowers, setsuperpowers] = useState(props.profile?.contacts.superpowers)
    let [filecount, setfileCount] = useState(0)

    const onPicSelected = (e) => {
        // console.log(e.target.files)
        if (e.target.files.length) {
            setfileCount(e.target.files.length)
            setPictures(Array.from(e.target.files))
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();

        pictures.forEach((file, index) => {
            formData.append(`pictures[${index}]`, file);
        });

        formData.append("nickname", data.nickname);
        formData.append("real_name", data.real_name);
        formData.append("origin_description", data.origin_description);
        formData.append("catch_phrase", data.catch_phrase);
        formData.append("superpowers", data.superpowers);

        try {
            const response = HeroesApi.PostHero(formData)
// console.log(response)
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className={q.body}>
            <form className={q.form} onSubmit={handleSubmit(onSubmit)} >
                <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h1 className={q.h1}>Add Hero</h1>
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
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <label className={b.Bbutton} htmlFor="pictures" >
                            Choose hero photo
                        </label>
                            <input 
                                id="pictures" 
                                className={q.uploadFile} 
                                type="file" 
                                style={{ display: "none" }}
                                aria-invalid={errors.catch_phrase ? "true" : "false"}
                                {...register("pictures", {})}
                                multiple
                                onChange={(e) => { onPicSelected(e) }}
                                 />
                            {filecount ? <>chosen {filecount} files</> : <></>}
                    </div>
                </section>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className={b.Bbutton} style={{ display: "inline" }} type="submit" >SUBMIT</button>
                    <NavLink to={"../"}>
                        <button className={b.Bbutton} style={{ display: "inline", textDecoration: "none" }} >Deny</button>
                    </NavLink>
                </div>
            </form>
        </div>

    );
}