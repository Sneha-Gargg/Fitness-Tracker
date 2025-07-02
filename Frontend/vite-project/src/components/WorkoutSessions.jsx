import React from 'react'

const WorkoutSessions = () => {
    return (
        <section className="workout_session">
            <div className="wrapper">
                <h1>TOP WORKOUT SESSION</h1>
                <p>Unlock your peak potential with our Top Workout Session – a curated blend of strength, cardio, and flexibility exercises designed to maximize results in minimum time. Track your performance, stay motivated, and transform your fitness journey one session at a time!</p>
                <img src="/img5.jpg" alt="workout" />
            </div>
            <div className="wrapper">
                <h1>FEATURED BOOTCAMPS</h1>
                <p>Transform your fitness journey with our curated bootcamps — designed for every body type and goal. Tailored using your BMI and preferences, each program delivers maximum results, from beginner routines to advanced training plans. Find the bootcamp that fits your vibe and fuels real progress.</p>
                <div className="bootcamps">
                    <div>
                        <h4>Track Your Daily Progress</h4>
                        <p>Stay on top of your goals by logging every step, rep, and calorie. Our tracker helps you visualize improvements over time so you stay motivated and focused.</p>
                    </div>
                    <div>
                        <h4>Personalized Workout Plans</h4>
                        <p>Get routines tailored to your fitness level and goals. Whether it’s weight loss, muscle gain, or general fitness, we help you follow a plan that works for you.</p>
                    </div>
                    <div>
                        <h4>Set Goals, Crush Limits</h4>
                        <p>Set achievable fitness goals and gradually push your limits. Whether it’s running 5K or doing 20 pushups, we’ll help you get there—step by step. Every big change starts with a small goal. </p>
                    </div>
                    <div>
                        <h4>Workout Streaks to Stay Motivated</h4>
                        <p>Build momentum with workout streaks. The more consistent you are, the stronger your streak becomes—keeping you accountable.Sometimes all you need is a little push. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkoutSessions