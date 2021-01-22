import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

const About = () => {
    return (
        // the following 4 lines are the approximate behind-the-scenes equivalent to the 4 lines that come after
        // React.createElement("section", {}, [
        // React.createElement('img', {}, ()),
        // React.createElement("h1", {}, "Who am I?")
        // ])
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}


export default About;