import classes from "./FAQ.module.css";
function FAQ() {
  return (
    <div className={classes.border}>
      <p className={classes.para1}>
        To Provide urgent & excellent customer service to our customers we have
        added this feature. You may be able to get faster answers by scrolling
        down to existing FAQs.
      </p>
      <p className={classes.para1}>
        Ask or find an answer to the FAQs below: We will try to answer as soon
        as possible.
      </p>
      <p className={classes.para1}>
        Let us know how to improve this feature via sales@hennacrafts.com
      </p>
      <div className={classes.grayborder}>
        <p className={classes.para2}>WHAT IS HENNA?</p>
      </div>
      <p className={classes.para3}>
        Henna is a flowering plant! That is used to dye hair, skin, and clothes
        for thousands of years. The plant can be found in the subtropical region
        of Asia, Africa, and northern Australia. India, in particular, has a
        rich history with henna and cultivates the most high-quality henna crops
        in the world. The crops are then processed and used to make body art
        tattoo and to make henna hair dye.
      </p>
      <div className={classes.grayborder}>
        <p className={classes.para2}>WHAT IS HENNA POWDER?</p>
      </div>
      <p className={classes.para3}>
        The powder comes from the leaves of the henna plant which contain the
        red coloring pigment (lawsone). Lawsone is at its strongest when the
        leaves are ground into a powder. The lawsone pigment colors orange/red.
      </p>
      <div className={classes.grayborder}>
        <p className={classes.para2}>HOW DOES HENNA WORK?</p>
      </div>
      <p className={classes.para3}>
        The Henna deposits the Lawsone pigment (which is the coloring agent) on
        the outside of the hair cuticles. As the dye coats the hair strand and
        settles, it will bind to the keratin of the hair. The color darkens as
        the dye molecules absorb deeper into the hair binding to more protein.
        It also maintains the hair’s natural highlights and undertones, creating
        a more natural-looking dye than your regular chemical hair dyes.
      </p>
    </div>
  );
}

export default FAQ;
