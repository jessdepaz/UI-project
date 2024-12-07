export default function Research() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Research</h1>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">
          How Statistical Analysis Regarding the Future of Blissful Pages
        </h2>

        <section className="mb-6">
          <h3 className="text-xl font-medium mb-2">Introduction:</h3>
          <p>
            This project aims to create a website to aid bilingual couples in developing a wedding site that caters to both languages.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-medium mb-2">Description of the Plan:</h3>
          <p>
            To begin, we studied a total of six personas to understand the needs for developing a bilingual wedding site. Next, we analyzed hypothetical scenarios of each group. Then, a mood-board to determine the design and color combination for the website. Finally, we developed a prototype and sent out a questionnaire to evaluate the likelihood of people using the site in the future.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-medium mb-2">Hypothesis:</h3>
          <p>
            H<sub>0</sub>: Offering better/helpful features will not change how many people will want to use the site in the future.
            <br />
            H<sub>a</sub>: Offering better/helpful features will increase how many people will want to use the site in the future.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-medium mb-2">Statistical Analysis:</h3>
          <h4 className="text-lg font-medium mb-2">Multi-regression Model:</h4>
          <p>
            y = 0.344 -0.355buttons – 0.274LikedFeatures + 1.42ExperiencedSomething – 0.39LearnedSomething +
            0.377EnjoyedSomething – 0.299didSomething + 0.136easyToUse + 0.621Helpful + 0.218Interactive
          </p>
          <h4 className="text-lg font-medium mb-2">Model Summary:</h4>
          <p>
            This model (which fits the entire data) produces an R<sup>2</sup> value of 0.761. Therefore, 76.1% of the variability in y is explained by the model. In other words, this model will correctly predict about 76.1% of how many people will want to use Blissful Pages in the future.
          </p>
        </section>

        <section className="mb-6">
          <h4 className="text-lg font-medium mb-2">Analysis of Variance:</h4>
          <img
            src="images/research/survey-results-1.png"
            alt="ANOVA Summary Table"
            className="mb-4 rounded-lg shadow-lg"
          />
          <p>
            As can be seen, the Mean Square Error is 0.483 which is fairly small. Also, we have a p-value that is (having less than sign here cause an error)0.01 which is less than 0.05 which means the model is significant. Therefore, the null hypothesis is rejected; the model shows that better features will result in more people using the website in the future. Next, more tests should be done to determine how to optimize the model.
          </p>
        </section>

        <section className="mb-6">
          <h4 className="text-lg font-medium mb-2">Scatter Plot of the Full Model:</h4>
          <img
            src="images/research/survey-results-1.png"
            alt="Scatter Plot"
            className="mb-4 rounded-lg shadow-lg"
          />
          <section className="mb-6">
            <h4 className="text-lg font-medium mb-2">Box-Plots of each variable:</h4>

            {/* First row of images */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <img
                src="images/research/survey-results-1.png"
                alt="Box Plot 1"
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src="images/research/survey-results-2.png"
                alt="Box Plot 2"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Second row of images */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <img
                src="images/research/survey-results-3.png"
                alt="Box Plot 3"
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src="images/research/survey-results-4.png"
                alt="Box Plot 4"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Third row of images */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <img
                src="images/research/survey-results-5.png"
                alt="Box Plot 5"
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src="images/research/survey-results-6.png"
                alt="Box Plot 6"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Fourth row of images */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <img
                src="images/research/survey-results-7.png"
                alt="Box Plot 7"
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src="images/research/survey-results-8.png"
                alt="Box Plot 8"
                className="w-full rounded-lg shadow-lg"
              />
              <p>
                As can be seen from analyzing the box-plots for each variable, there are between two to three outliers in the data. Therefore, this may cause the model to be slightly skewed.
              </p>
            </div>
          </section>
        </section>

        <section className="mb-6">
          <h4 className="text-lg font-medium mb-2">Matrix-Plot Analyzing all Variables:</h4>
          <img 
            src="images/research/survey-results-1.png" 
            alt="Matrix-Plot" 
            className="mb-4 rounded-lg shadow-lg"
          />
          <p>
          The matrix-plot shows a linear relationship between excited_future with interactive, helpful, and enjoyed. Also, there seems to be some multicollinearity happening between some of the variables. As a result, more tests should be conducted to decide on whether the model should only contain the variables interactive, helpful, and enjoyed to make accurate predictions. 
          </p>
        </section>

        <section className="mb-6">
          <h4 className="text-lg font-medium mb-2">Coefficient Analysis:</h4>
          <img 
            src="images/research/survey-results-1.png" 
            alt="Matrix-Plot" 
            className="mb-4 rounded-lg shadow-lg"
          />
          <p>
          Upon analyzing the coefficients, one my conclude that indeed there is multicollinearity within the variables. Specifically, there is strong multicollinearity with enjoyed, did_something, helpful, and interactive. Although helpful has multicollinearity, it is the only variable that is of significant importance. As a result, the previous assumption from the matrix plots seems true; the variables interactive, helpful, and enjoyed may be the best choice of regressors for the model. Yet, more tests should be run to validate whether or not some of the variables with lower VIF scores should be kept. 
          </p>
        </section>
        
        <section className="mb-6">
          <h4 className="text-lg font-medium mb-2">Residual Analysis:</h4>
          <img 
            src="images/research/survey-results-1.png" 
            alt="Histogram" 
            className="mb-4 rounded-lg shadow-lg"
          />
          <p>
          This bar graph shows that the data is slightly left-skewed. This error may be corrected by either collecting mor surveys, or adapting the model according to the above analysis regarding variable reduction.
          </p>
          <img 
            src="images/research/survey-results-1.png" 
            alt="Scatterplot" 
            className="mb-4 rounded-lg shadow-lg"
          />
          <p>
          As can be seen from the above scatter plot, the residuals tend to be funnel shaped which point to a slightly problematic model.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-medium mb-2">Conclusion:</h3>
          <p>
          To conclude, the data collected from the surveys regarding the future of Blissful Pages seems to be promising. There is evidence that the model is significant and there is a positive linear relationship between the variables interactive, helpful, and enjoyed. For the future, speaking with a HCI expert could help us determine which variables are of most importance to perfect and better understand the model, or working on a few linear transformations within the variables may help create a better model. To end, the team looks forward for the future of Blissful Pages.
          </p>
        </section>
      </div>
    </div>
  );
}
