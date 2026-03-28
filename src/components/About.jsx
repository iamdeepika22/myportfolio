const About = () => {
  return (
    <div className="abtWrapper">
      <div className="left-section">
        <h1>Be better than yesterday</h1>
      </div>

      <div className="right-section">
        <div className="aboutContainer">
          <div id="content-container">
            <ul>
              <li>
                <div className='innerList'>
                  <p>Programming</p>
                  <ul>
                    <li><img src='/myportfolio/assets/skills/typescript.svg' alt="TypeScript" width="40" /></li>
                    <li><img src='/myportfolio/assets/skills/c.svg' alt="C" width="40" /></li>
                    <li><img src='/myportfolio/assets/skills/cpp.png' alt="CPP" width="40" /></li>
                    <li><img src="/myportfolio/assets/skills/python.svg" alt="Python" width="40" /></li>
                  </ul>
                </div>
              </li>

              <li>
                <div className='innerList'>
                  <p>Client Side</p>
                  <ul>
                    <li><img src='/myportfolio/assets/skills/html.svg' alt="HTML" width="40" /></li>
                    <li><img src='/myportfolio/assets/skills/css.svg' alt="CSS" width="40" /></li>
                    <li><img src="/myportfolio/assets/skills/react.svg" alt="React" width="40" /></li>
                    <li><img src="/myportfolio/assets/skills/redux.svg" alt="Redux" width="40" /></li>
                  </ul>
                </div>
              </li>

              <li>
                <div className='innerList'>
                  <p>Server Side</p>
                  <ul>
                    <li><img src="/myportfolio/assets/skills/node-js.svg" alt="Node JS" width="40" /></li>       
                    <li><img src="/myportfolio/assets/skills/mysql.svg" alt="My SQL" width="40" /></li>         
                  </ul>
                </div>
              </li>

              <li>
                <div className='innerList'>
                  <p>DevOps & Tools</p>
                  <ul>
                    <li><img src="/myportfolio/assets/skills/cicd.png" alt="CI/CD" width="40" /></li>
                    <li><img src="/myportfolio/assets/skills/git.svg" alt="Git" width="40" /></li>
                    <li><img src="/myportfolio/assets/skills/lambda.svg" alt="Lambda" width="40" /></li>
                    <li><img src="/myportfolio/assets/skills/docker.svg" alt="Docker" width="40" /></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;