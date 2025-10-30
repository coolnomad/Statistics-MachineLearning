# Behavior of a Random Variable

> Goal: understand what a single random variable can do — from textbook distributions to real-world oddities.

---

## 1. Basic: textbook distributions

### 1.1 Probability mass / density / cumulative functions
- Discrete: PMF `p(x) = P(X=x)`  
- Continuous: PDF `f(x)` where `∫ f(x) dx = 1`  
- CDF `F(x) = P(X ≤ x)`  
- Visualize how pdf, cdf, and histogram correspond.

**Interactive ideas**
- Show uniform, normal, exponential pdfs.  
- Hover or click to reveal probabilities between intervals.

---

### 1.2 Summary statistics
- Mean `E[X]`, variance `Var(X)`, skewness, kurtosis.  
- Simulation: compute sample moments vs theoretical ones.  
- Show sensitivity of mean vs median to outliers.

---

### 1.3 Common shapes
| Family | Parameters | Description | Typical Domain |
|---------|-------------|--------------|----------------|
| Uniform(a,b) | range | flat | bounded |
| Normal(μ,σ²) | mean, spread | symmetric, light-tailed | ℝ |
| Exponential(λ) | rate | right-skewed | ≥0 |
| Gamma(α,β) | shape, rate | flexible skew | ≥0 |
| Beta(α,β) | bounded [0,1] | many shapes | [0,1] |
| Lognormal(μ,σ²) | meanlog, sdlog | heavy right tail | ≥0 |

**Task**
- Implement parameter sliders and watch pdf transform.

---

### 1.4 Transformations
- If `Y = aX + b` → scale and shift.  
- If `Y = g(X)` → use change-of-variables formula  
  `f_Y(y) = f_X(g⁻¹(y)) |d/dy g⁻¹(y)|`.  
- Simulation check: transform samples, compare empirical to analytic.

**Examples**
- Exponential → log → Gumbel type tail.  
- Normal → exp → lognormal.

---

### 1.5 Mixtures and multimodality
- Definition: weighted combination of component distributions.  
  `f(x) = Σ wᵢ fᵢ(x)`, Σwᵢ = 1.  
- Example: 70% Normal(0,1) + 30% Normal(5,1).  
- Shows up in data from heterogeneous populations.

**Demo**
- Slider to change mixture weight → see emergence of two peaks.

---

## 2. Advanced: real-data phenomena

### 2.1 Heavy tails and infinite moments
- Some variables have undefined variance or mean (e.g., Pareto(α ≤ 2)).  
- Implication: averages converge slowly or not at all.  
- Visual check: log-log plot of tail probabilities.

**Practical consequence**
- Means unreliable, medians more stable.  
- Need robust estimators.

---

### 2.2 Truncation and censoring
- Truncated: data outside range unobserved.  
- Censored: we only know it exceeded a threshold.  
- Common in survival, reliability, and assay detection limits.

**Simulation**
- Generate full data then truncate → compare estimated mean to truth.

---

### 2.3 Mixtures from hidden states
- Real data often combine multiple regimes (e.g., two patient subtypes).  
- Mixture leads to apparent heteroskedasticity.  
- Relate to expectation over latent variable `Z`: `f(x)=ΣP(Z)f(x|Z)`.

---

### 2.4 Power-law and log-log linearity
- `P(X>x) ∝ x^{−α}`  
- Appear in income, city size, network degree.  
- Estimation via log-log regression of tail frequencies.

**Interactive**
- Generate samples, fit line on log-log CCDF, estimate α.

---

### 2.5 Stable and Lévy distributions
- Generalize normal but allow infinite variance.  
- Characterized by stability index `α ∈ (0,2]`.  
- Sum of heavy-tailed RVs remains in same family.  
- No closed-form pdf (except special cases).

**Application**
- Model large financial returns or genomic coverage bursts.

---

### 2.6 Empirical distributions and kernel density estimation
- For unknown `f(x)`, estimate from data:  
  `f̂(x) = 1/(nh) Σ K((x−xᵢ)/h)`  
- Choice of kernel and bandwidth matters.  
- Link to nonparametric inference.

**Demo**
- Show KDE with variable bandwidth; overlay histogram.

---

### 2.7 Information-theoretic view
- Entropy `H(X)` measures uncertainty.  
- Cross-entropy and KL divergence compare distributions.  
- Useful for ML loss functions and model calibration.

---

### 2.8 Robust and non-parametric summaries
- Median, MAD, quantiles, trimmed means.  
- Resistant to outliers; finite even when variance infinite.  
- Compare classical vs robust summaries on heavy-tailed data.

---

## 3. Synthesis

**Core message**
- A “single variable” can behave from perfectly tame to wild.  
- Understanding its shape, support, and tail behavior dictates which statistical tools work.  
- Before fitting models, always *look* at the marginal distribution.

---

## 4. Suggested exercises / demos

- Visualize transformation effects (`X`, `log(X)`, `exp(X)`).  
- Generate and fit mixture of normals; recover component weights.  
- Simulate Pareto vs Normal; compare sample mean stability.  
- Apply KDE to multimodal data.  
- Compute entropy for discrete vs continuous cases.

---

## 5. References

- Feller, *An Introduction to Probability Theory*, Vol. 2  
- Resnick, *Heavy-Tail Phenomena*  
- Silverman, *Density Estimation for Statistics and Data Analysis*  
- Taleb, *The Statistical Consequences of Fat Tails*  

---

*End of module: Behavior of a Random Variable*
