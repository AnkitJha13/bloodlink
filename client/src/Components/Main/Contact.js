import React from 'react'
import cc from "../../assets/cc.png"

const Contact = () => {
    const data = [
        {
            title: "BloodLink related queries, feedback and suggestions", body: [
                "Center For Development of Advanced Computing",
                "NCST, 68, Electronic City Phase I, Bangalore, Karnataka-560037",
                "080 2852 3300",
                "bloodlink.cdac.in"
            ]
        },
        {
            title: "For Administrative queries", body: [
                "Blood Cell, National Health Mission",
                "Ministry of Health & Family Welfare,New Delhi - 110011"
            ]
        },
        { title: "For administrative queries", body: ["Blood Cell, National Health Mission", "Ministry of Health & Family Welfare,New Delhi - 110011"] }
    ];
    return (
        <div className='px-64'><br />
            <h1 className='text-center text-3xl font-bold'>Contact Details</h1><br />
            <div className='flex justify-around'>
                <div>
                    {
                        data.map((e) => {
                            return (
                                <>
                                    <p className='text-xl font-bold underline'>{e.title}</p><br />
                                    <code>
                                        {e.body.map((k) => {
                                            return <p className='text-md'>{k}</p>
                                        })}
                                    </code><br />
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <img src={cc} draggable={false} width="90%" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact