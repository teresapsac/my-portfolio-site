import React from "react";
import Hero from '../components/Hero'
import Content from '../components/Content'

function AboutPage(props) {

  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Post-Its everywhere, that fill a wall with creative projects,
          programmes and goals I've set myself to reach. This is my setting.
        </p>

        <p>
          While working next to a software engineer, during a Marketing
          internship, I came to realise that I'd rather be the one in the
          trenches, developing the product, finding the solutions and fixing the
          issues. In pursuit of that objective, I came up with a strategy: to
          travel to the UK in hopes of saving up some money and then coming back
          home to study programming.
        </p>

        <p>
          It all went according to plan and I am now one happy programmer gal,
          paving my way into something I love and want to keep learning and
          improving.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
