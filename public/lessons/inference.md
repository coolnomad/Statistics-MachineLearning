# Inference and Estimation

> Goal: learn how to infer population properties from samples, quantify uncertainty, and link simulation to theory.

---

## 1. The Estimation Problem

**Concept**  
We observe a sample and want to estimate an unknown parameter θ (mean, proportion, rate, etc.).

**Simulation idea**
- Draw repeated samples from a known population (e.g., Normal(μ=0,σ=1)).  
- Compute sample mean each time; show sampling distribution.

**Key terms**
- **Estimator**: rule or function producing an estimate.  
- **Bias**: `E[θ̂] - θ`.  
- **Variance**: variability across repeated samples.  
- **MSE**: `bias² + variance`.

---

## 2. Sampling Distributions

**Intuition**
Each statistic has its own distribution due to sample randomness.

**Simulation**
- Repeat many samples of size `n`; record mean.  
- Plot histogram of means → normal shape as `n` increases.

**Key concept**
Central Limit Theorem ensures approximate normality of many estimators.

---

## 3. Point Estimation

**Frequentist view**
Choose estimators that minimize expected loss or are unbiased and efficient.

| Parameter | Common Estimator | Notes |
|------------|------------------|-------|
| Mean (μ) | sample mean | unbiased |
| Variance (σ²) | corrected sample variance | divide by n−1 |
| Proportion (p) | sample proportion | Binomial case |
| Rate (λ) | average count per time | Poisson |

**Simulation task**
Compare biased vs unbiased variance formulas.

---

## 4. Interval Estimation

**Definition**
An interval `[L,U]` computed from data that contains θ with given confidence (e.g., 95%).

**Normal mean case**
`X̄ ± z_{0.975}·σ/√n`

**Unknown σ**
use t-distribution with df = n−1.

**Simulation**
- Draw samples, compute 95% CIs.  
- Count fraction covering true μ (≈0.95).

---

## 5. Hypothesis Testing

**Concept**
Formalize decision-making under uncertainty.

**Steps**
1. State H₀ and H₁.  
2. Choose test statistic.  
3. Compute p-value.  
4. Reject/Fail to reject.

**Interactive idea**
Slider for significance level α; visualize rejection region.

**Examples**
- z-test for mean.  
- proportion test.  
- permutation test for two means.

---

## 6. Likelihood and Maximum Likelihood Estimation

**Likelihood**
`L(θ; x) = P(X=x | θ)` measures support data gives to θ.

**MLE**
maximize `L(θ; x)` or log-likelihood.

**Demo**
- Generate sample from Exponential(λ=2).  
- Compute log-likelihood across λ grid.  
- Show true λ and estimated λ̂.

**Properties**
- Asymptotic normality.  
- Consistency under regular conditions.

---

## 7. Resampling and Bootstrap

**Idea**
Approximate sampling variability directly from data.

**Algorithm**
1. Sample with replacement.  
2. Compute statistic.  
3. Repeat many times.  
4. Use empirical quantiles for CI.

**Simulation**
Bootstrap CI for median or correlation.

---

## 8. Bayesian Estimation (Preview)

**Concept**
Combine prior belief with data likelihood.

**Formula**
`Posterior ∝ Likelihood × Prior`.

**Simple example**
- Beta prior + Binomial data → Beta posterior.  
- Show how posterior mean updates with more data.

**Interactive**
Adjust prior α,β and observe posterior shift.

---

## 9. Summary Table

| Concept | Frequentist | Bayesian |
|----------|--------------|----------|
| Unknown quantity | fixed but unknown | random with prior |
| Interval | confidence interval | credible interval |
| Logic | repeat-sampling | probability of parameter |

---

## 10. Exercises / Demos

- Simulate sampling distribution of mean for different n.  
- Compare CI coverage for normal vs heavy-tailed data.  
- Visualize log-likelihood for exponential and normal.  
- Bootstrap a statistic and compare to theoretical SE.  
- Update Beta prior with coin-flip data.

---

## 11. References

- Casella & Berger, *Statistical Inference*  
- Rice, *Mathematical Statistics and Data Analysis*  
- Wasserman, *All of Statistics*  
- Gelman et al., *Bayesian Data Analysis*  

---

*End of module: Inference and Estimation*
