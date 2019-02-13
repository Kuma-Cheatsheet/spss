(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{167:function(t,e,r){"use strict";r.r(e);var a={props:["slot-key"]},i=r(20),s=Object(i.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[r("h1",{attrs:{id:"spss-x-data-analysis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spss-x-data-analysis","aria-hidden":"true"}},[t._v("#")]),t._v(" SPSS x Data Analysis")]),t._v(" "),r("p",[t._v("by Kumamon + Uncle G")]),t._v(" "),r("hr"),t._v(" "),r("h1",{attrs:{id:"all-regressions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#all-regressions","aria-hidden":"true"}},[t._v("#")]),t._v(" All Regressions")]),t._v(" "),r("p",[t._v("ทำสำหรับ Model ที่เป็นแบบ Regressions")]),t._v(" "),r("h2",{attrs:{id:"ทดสอบ-normality"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ทดสอบ-normality","aria-hidden":"true"}},[t._v("#")]),t._v(" ทดสอบ Normality")]),t._v(" "),r("p",[t._v("ค่าต้องกระจายแบบ Normal Distribution ไม่เบ้ไปมา")]),t._v(" "),r("p",[t._v("สร้าง P-Plots")]),t._v(" "),r("ul",[r("li",[t._v("Analyze → Descriptive Statistics → P-Plots … → ใส่ตัวแปร → กด OK")])]),t._v(" "),r("p",[t._v("สร้าง report statistics")]),t._v(" "),r("ul",[r("li",[t._v("Analyze → Descriptive Statistics → Frequencies → ใส่ตัวแปร → ไปที่ Statistic แล้วติ๊กทุกอย่าง\n"),r("ul",[r("li",[t._v("ยกเว้น Cut point, Percentile, Values are group midpoint\n→ กด OK")])])])]),t._v(" "),r("p",[t._v("สร้างกราฟ Historgram")]),t._v(" "),r("ul",[r("li",[t._v("Analyze → Descriptive Statistics → Frequencies → Chart → Histogram + เลือก Show normal curve")])]),t._v(" "),r("p",[t._v("ทำ K-S Test")]),t._v(" "),r("ul",[r("li",[t._v("Analyze → Descriptive Statistics → Explore → ใส่ตัวแปรใน Dependent List → กด Plots → ติ้ก Normality plot with test → กด Continue → ไปที่ Option → เลือก Exclude cases pairwise")])]),t._v(" "),r("p",[t._v("ทำ Levene's test")]),t._v(" "),r("ul",[r("li",[t._v("Analyze → Descriptive Statistics → Explore → ใส่ตัวแปรใน Dependent List → กด Plots → ติ้ก Normality plot with test → ช่อง Spread vs Level with Lavene Test เลือก Untransformed")])]),t._v(" "),r("h2",{attrs:{id:"ลด-bias"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ลด-bias","aria-hidden":"true"}},[t._v("#")]),t._v(" ลด Bias")]),t._v(" "),r("p",[t._v("เขียนแล้ว ด้านบน "),r("a",{attrs:{href:"https://paper.dropbox.com/doc/SPSS-x-Data-Analysis-Outlier-Detection-M7cT1Uof2SwF468FgabCl#:uid=163973896164742479249473&h2=Outlier-Detection",target:"_blank",rel:"noopener noreferrer"}},[t._v("+SPSS x Data Analysis: Outlier-Detection"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"heterogeneity-of-variance"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#heterogeneity-of-variance","aria-hidden":"true"}},[t._v("#")]),t._v(" Heterogeneity of variance")]),t._v(" "),r("p",[t._v("Analyze → Descriptive Statistics → Explore → ใส่ Dependent List, Factor List → Plot → เลือก Untransformed")]),t._v(" "),r("p",[t._v("ถ้า significant (< 0.05) = ไม่มี Heterogeneity of variance = ดี")]),t._v(" "),r("h2",{attrs:{id:"linearity"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linearity","aria-hidden":"true"}},[t._v("#")]),t._v(" Linearity")]),t._v(" "),r("p",[t._v("ข้อมูลมีการเรียงอย่างเป็นเส้นตรง + เช็คว่าตัวแปรนั้นเป็นแบบ Continuous\nGraph → Chart Builder → Scatter/Dot → Simple Scatter → เอาตัวแปรไปใส่กราฟ → กด OK")]),t._v(" "),r("h2",{attrs:{id:"correlations-model"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#correlations-model","aria-hidden":"true"}},[t._v("#")]),t._v(" Correlations Model")]),t._v(" "),r("p",[t._v("Analyze > Correlation > Bivariate → ใส่ตัวแปรเข้า Variable → ติ้กสื่งที่อยากได้")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("strong",[t._v("Pearson’s Correlations")])]),t._v(" "),r("th",[r("strong",[t._v("Spearman’s Correlations")])])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("สำหรับ Linear Relationship")]),t._v(" "),r("td",[t._v("สำหรับ Monotonic (Logsitics) Relationship")])]),t._v(" "),r("tr",[r("td",[t._v("ค่าตัวแปรเป็นแบบ Continuous")]),t._v(" "),r("td",[t._v("ค่าตัวแปรเป็นแบบ Ordinal / Nominal")])])])]),t._v(" "),r("p",[t._v("ถ้า "),r("code",[t._v("Spearman > Pearson")]),t._v(" → model มีความเป็น monotonic แต่ไม่ใช่ linear\nทำให้ถ้าอยากใช้ linear model → ต้องทำ Transformation ก่อน")]),t._v(" "),r("h2",{attrs:{id:"correlations-type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#correlations-type","aria-hidden":"true"}},[t._v("#")]),t._v(" Correlations Type")]),t._v(" "),r("p",[t._v("http://www.differencebetween.net/business/marketing-business/differences-between-bivariate-and-partial-correlation/")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("strong",[t._v("Bivariate")])]),t._v(" "),r("th",[r("strong",[t._v("Partial")])])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("ความสัมพันธ์ระหว่าง A กับ B")]),t._v(" "),r("td",[t._v("ความเกี่ยวข้องกัน โดยที่ไม่มี C มาเกี่ยวด้วย")])]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td",[t._v("ให้ทำการใส่ตัวแปรที่ช่อง Controlling For เพื่อทำให้ตัวแปรนั้นไม่เกี่ยวข้องกับตัวแปรที่คำนวณ")])])])]),t._v(" "),r("ol",[r("li",[t._v("The bivariate correlation refers to the analysis to two variables, often denoted as X and Y – mainly for the purpose of determining the empirical relationship they have.")]),t._v(" "),r("li",[t._v("The partial correlation measures the degree between two random variables, with the effect of a set of controlling random variables removed.")])]),t._v(" "),r("h2",{attrs:{id:"chi-square-test"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chi-square-test","aria-hidden":"true"}},[t._v("#")]),t._v(" Chi-Square Test")]),t._v(" "),r("p",[t._v("การทดสอบ เพื่อวัดความเป็น Independent ของ 2 กลุ่ม")]),t._v(" "),r("p",[r("strong",[t._v("Assum"),r("strong",[r("strong",[t._v("p")])]),t._v("tion****s")])]),t._v(" "),r("ol",[r("li",[t._v("ตัวแปรต้น → ระดับหมวดหมู่")]),t._v(" "),r("li",[t._v("ข้อมูลที่เก็บมาอยู่ในหลายหมวดหมู่ไม่ได้ ต้องอยู่ในหมวดหมู่ใดหมวดหมู่หนึ่ง")])]),t._v(" "),r("p",[r("strong",[t._v("Hypothesis")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("strong",[t._v("Null")])]),t._v(" "),r("th",[t._v("A & B มีความเป็น Independent ต่อกัน")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[t._v("Alternative")])]),t._v(" "),r("td",[t._v("A & B ไม่มีความเป็น Independent ต่อกัน (Dependent ต่อกัน)")])])])]),t._v(" "),r("p",[r("strong",[t._v("How to use")]),t._v("\nAnalyze > Descriptive Statistics > Crosstabs → Statistic → เอาประเภทไปใส่ Column และ Row → เลือก Chi-Square, Norminal (Contingency Coefficient, Phi & Cramer’s V, Lambda)")]),t._v(" "),r("p",[t._v("ไปที่ Cell แล้วเลือก Count (Observed, Expected), Z-Test (ทุกอัน), Percentage (ทุกอัน), Residual (Standardized)")]),t._v(" "),r("p",[r("strong",[t._v("Fisher Exact Test")]),t._v("\nหากว่าค่า Sample Size นั้นน้อย (ค่า Expected Count ในตารางคาดเดา) ให้ใช้ Fisher Exact Test แทน\nไปที่ Exact → เลือก Exact")]),t._v(" "),r("p",[r("strong",[t._v("Interpretation")]),t._v("\nโดยใช้ค่า Phi ( Φ ) หรือ/และ ค่า Cramér’s V")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th"),t._v(" "),r("th",[t._v("Phi ( Φ )")]),t._v(" "),r("th",[t._v("Cramér’s V ( φ"),r("em",[t._v("c")]),t._v(" )")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Dimension Limitation")]),t._v(" "),r("td",[t._v("หากตารางไม่ได้เป็นแบบ 2x2 ห้ามใช้")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td",[t._v("ต้องมี 2 Dichtomous Variable")]),t._v(" "),r("td",[t._v("Nominal Variable")])])])]),t._v(" "),r("p",[t._v("แต่ถ้าตารางเป็น 2x2 จะใช้อันไหนก็ได้ ค่าเท่ากัน\nเพื่อแสดงความสัมพันธ์ ว่าแน่นแฟ้นขนาดไหน โดยดูค่า absolute ของมัน")]),t._v(" "),r("p",[t._v("ดูความ Significant ในช่อง Asymp. Sig ในตาราง Chi-Square Test "),r("strong",[t._v("sig ที่ >= 0.05")]),t._v("\nหากมีค่าที่ไม่ sig = มีค่าในตัวแปรใดตัวแปรหนึ่งแจกแจงผิดปกติ = มีความสัมพันธ์ระหว่างตัวแปร = Fail Null Hypothesis")]),t._v(" "),r("h2",{attrs:{id:"predictor-independent-variable-entry-type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#predictor-independent-variable-entry-type","aria-hidden":"true"}},[t._v("#")]),t._v(" Predictor (Independent Variable) Entry type")]),t._v(" "),r("p",[t._v("การเลือกนั้น ทำให้แล้วแต่ว่าแต่ละตัวแปรนั้นสำคัญมั้ย ถ้าไม่สำคัญก็ไม่ต้องเพื่ม")]),t._v(" "),r("p",[t._v("Forced Entry (ENTER Mode) [default]")]),t._v(" "),r("ul",[r("li",[t._v("เข้าทีเดียวทุกตัว ไม่สนใจว่าตัวแปรไหนจะสำคัญหรือไม่ และไม่เอาออกด้วย")])]),t._v(" "),r("p",[t._v("Enter and Remove (STEPWISE Mode)")]),t._v(" "),r("ul",[r("li",[t._v("เลือกตัวที่สำคัญที่สุดก่อน แล้วค่อยๆเพื่มทีละตัว ตามความสำคัญ หากไม่สำคัญก็ไม่ต้องเข้า")])]),t._v(" "),r("p",[t._v("โดยการเลือกนั้น SPSS จะเลือกจากค่า Chi-Square ที่เปลี่ยนไป ว่าไปในทิศทางที่ดีขึ้นหรือไม่")]),t._v(" "),r("h2",{attrs:{id:"durbin-watson-statistics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#durbin-watson-statistics","aria-hidden":"true"}},[t._v("#")]),t._v(" Durbin-Watson Statistics")]),t._v(" "),r("p",[t._v("ใช้เพื่อวัด Independent of Error (Observations)")]),t._v(" "),r("p",[r("strong",[t._v("How to use")]),t._v("\nLinear Regression → ปุ่ม Statistics")]),t._v(" "),r("p",[r("strong",[t._v("Interpretation")]),t._v("\nค่าต้องอยู่เท่ากับ 2 ± 0.5 จะถือว่าดีมาก\nหากค่าเกิน 2 ± 2 จะถือว่ารับไม่ได้ มีปัญหา Independent of Error")]),t._v(" "),r("p",[t._v("โดยค่าที่น้อยกว่า 2 คือความสัมพันธ์เชิงลบ และมากกว่า 2 คือความสัมพันธ์เชิงบวก")]),t._v(" "),r("hr"),t._v(" "),r("h1",{attrs:{id:"time-series-autoregressive-analysis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#time-series-autoregressive-analysis","aria-hidden":"true"}},[t._v("#")]),t._v(" Time Series / Autoregressive Analysis")]),t._v(" "),r("p",[t._v("เป็นการวัดว่าตัวแปร กับ เวลา นั้น มีความสัมพันธ์กันหรือไม่ และนำไป predict ค่าตัวแปรใหม่ โดยให้เวลามาหรือไม่")]),t._v(" "),r("pre",[r("code",[t._v("Autoregressive = เหมือน time series แต่มีหลายตัวแปรกว่า Time Series\n")])]),t._v(" "),r("p",[r("strong",[t._v("Component of Time Series")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("strong",[t._v("Trend")])]),t._v(" "),r("th",[t._v("เกิด Trend กับเวลาหรือไม่")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[t._v("Seasonality")])]),t._v(" "),r("td",[t._v("ฤดูกาลเป็นสาเหตุของผลกระทบหรือไม่")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("Cycle")])]),t._v(" "),r("td",[t._v("เหมือน Season แต่อาจจะมีขนาดไม่เท่าๆกันได้")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("Irregular Variation / Fluctuations")])]),t._v(" "),r("td",[t._v("มีการเปลี่ยนแปลงแบบกระทันหัน "),r("br"),t._v("เช่นอยู่ดีๆ sales ก็ peak ไปวันเดียว แล้วก็กลับมาเหมือนเดิม")])])])]),t._v(" "),r("h2",{attrs:{id:"tests"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tests","aria-hidden":"true"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),r("ol",[r("li",[t._v("ดูข้อมูลเราเป็นประมาณไหน")])]),t._v(" "),r("p",[t._v("Analyze → Forecasting → Sequence Charts → ลาก ตัวแปรที่รวมทุกอย่างที่อยากดูไว้ใน variable → ตัวแบ่งช่วงเวลาไว้ใน Time Axis Label")]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("สร้างโมเดล")]),t._v(" "),r("li",[t._v("ไปที่ Analyze > Forecasting > Create Traditional Model → นำตัวแปรที่เป็นแบบแยกไปใส่ใน Dependent Variable")]),t._v(" "),r("li",[t._v("Method ตั้งเป็น Expert Modeler → กด Criteria → เอาตัวติ้ก “Expert modeler considers seasonal model” ออก → กด Continue (แล้วแต่ตัวแปรด้วย)")]),t._v(" "),r("li",[t._v("tab Option")]),t._v(" "),r("li",[t._v("เลือก “First Case after end of estimation period through a specific date” → ใส่ค่าเพื่อทำนาย")]),t._v(" "),r("li",[t._v("tab Statistics")]),t._v(" "),r("li",[t._v("เลือก Display fit measures , Stationary R Square, Goodness of fit และ Display forecasts")]),t._v(" "),r("li",[t._v("tab Save")]),t._v(" "),r("li",[t._v("เลือก Predicted Values ใน column save")]),t._v(" "),r("li",[t._v("tab Plots")]),t._v(" "),r("li",[t._v("เลือก Maximum absolute percentage error, Mean absolute percentage error, Series, Observed Values, Forecast")])]),t._v(" "),r("h2",{attrs:{id:"reporting-the-result"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reporting-the-result","aria-hidden":"true"}},[t._v("#")]),t._v(" Reporting the result")]),t._v(" "),r("p",[t._v("SPSS จะออกค่าที่เราต้องการหา (ตอนที่ใส่ input เวลา) ออกมาให้ ว่ามันเดาอะไรออกมา")]),t._v(" "),r("p",[t._v("แล้วก็แค่นั้น เพราะสอนแค่นั้นจริงๆ")]),t._v(" "),r("hr"),t._v(" "),r("h1",{attrs:{id:"vocabulary-time"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vocabulary-time","aria-hidden":"true"}},[t._v("#")]),t._v(" Vocabulary Time")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://statistics.laerd.com/spss-tutorials/img/lr/heteroscedastic-relationships.png",alt:"Scedasticity in linear regression"}})]),t._v(" "),r("p",[r("strong",[t._v("Heteroscedastic")]),t._v(' = Heterogeneity of variance = have different variabilities from others. Here "variability" could be quantified by the '),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Variance",target:"_blank",rel:"noopener noreferrer"}},[t._v("variance"),r("OutboundLink")],1),t._v(" or any other measure of "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Statistical_dispersion",target:"_blank",rel:"noopener noreferrer"}},[t._v("statistical dispersion"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://statistics.laerd.com/spss-tutorials/img/lr/outliers.png",alt:"Outliers in linear regression"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://statistics.laerd.com/spss-tutorials/img/lr/linear-nonlinear-relationships.png",alt:"Types of relationship"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.analyticsvidhya.com%2Fblog%2Fwp-content%2Fuploads%2F2014%2F07%2Fskewness-and-kurtosis.gif&f=1",alt:"Skewness + Kurtosis"}})])])},[],!1,null,null,null);s.options.__file="SPSS_x_Data_Analysis.md";e.default=s.exports}}]);