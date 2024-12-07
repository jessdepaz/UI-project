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
          <p>
            ANOVA Summary Table:
            <br />
            Regression Sum of Squares: 84.315<br />
            Residual Sum of Squares: 26.547<br />
            Total Sum of Squares: 110.862<br />
            Significance: &lt;0.001
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-medium mb-2">Conclusion:</h3>
          <p>
            To conclude, the data collected from the surveys regarding the future of Blissful Pages seems to be promising. There is evidence that the model is significant and there is a positive linear relationship between the variables interactive, helpful, and enjoyed. For the future, speaking with a HCI expert could help us determine which variables are of most importance to perfect and better understand the model, or working on a few linear transformations within the variables may help create a better model. The team looks forward to the future of Blissful Pages.
          </p>
        </section>
      </div>
    </div>
  );
}
