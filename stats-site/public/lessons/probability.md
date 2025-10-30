# Probability Foundations

> Goal: develop intuition for randomness and uncertainty through simulation and visualization before proofs.

---

## 1. Randomness and Frequency

**Idea**  
A probability measures how often an event would occur in repeated trials of an experiment.

**Simulation tasks**
- Flip a coin `n` times; plot empirical frequency of heads vs `n`.  
- Roll a die; show convergence of observed proportions to 1/6.  
- *Law of large numbers* appears visually.

**Key takeaway**
- Probability ≈ long-run relative frequency.
- Randomness is reproducible at the distribution level, not the outcome level.

---

## 2. Random Variables

**Concept**
- A random variable (RV) maps outcomes to numbers.  
- `X` may be discrete (number of heads) or continuous (reaction time).

**Discrete examples**
- Bernoulli(p): 0/1 outcome  
- Binomial(n,p): sum of Bernoulli trials  
- Expectation: `E[X] = Σ x·P(X=x)`  

**Continuous examples**
- Uniform(a,b), Normal(μ,σ²), Exponential(λ).  
- Expectation: `E[X] = ∫ x·f(x) dx`.

**Visual demo**
- Draw 10³ samples, show histogram + analytic pdf/pmf overlay.  
- Vary parameters interactively.

---

## 3. Conditional Probability and Independence

**Formulas**
- `P(A|B) = P(A∩B)/P(B)`  
- Independent if `P(A∩B)=P(A)P(B)`.

**Interactive ideas**
- Two dice → independence.  
- Draw cards without replacement → dependence.

**Simulation**
Compute empirical `P(A|B)` vs theoretical.

---

## 4. Common Distributions

| Type | Parameters | Typical Use |
|------|-------------|--------------|
| Bernoulli(p) | success probability | binary events |
| Binomial(n,p) | number of successes | count data |
| Poisson(λ) | mean rate | event counts |
| Geometric(p) | trials until success | waiting times |
| Uniform(a,b) | range | baseline randomness |
| Normal(μ,σ²) | mean, sd | measurement noise |
| Exponential(λ) | rate | interarrival times |
| Gamma(α,β) | shape, rate | waiting sums |

**Demo ideas**
- Slider to vary parameter; overlay histogram and pdf.  
- Highlight how shape changes.

---

## 5. Expectation Laws

**Linearity**
`E[aX + bY] = aE[X] + bE[Y]`

**Law of Total Expectation**
`E[X] = E[E[X|Y]]`

**Variance Decomposition**
`Var(X) = E[Var(X|Y)] + Var(E[X|Y])`

**Numerical check**
Simulate to verify the formulas empirically.

---

## 6. Convergence and the Law of Large Numbers

**Demonstration**
- Compute running mean of `Uniform(0,1)` draws.  
- Plot convergence of sample mean → 0.5.  
- Show decreasing variance with `1/n`.

**Central Limit Theorem (preview)**
- Sum of many independent small effects tends to normal.  
- Simulate sums of Bernoulli → histogram tends to bell curve.

---

## 7. Exercises / Demos

- Estimate π via Monte Carlo (component below).  
- Verify linearity of expectation numerically.  
- Simulate a Poisson process (exponential waiting times).  
- Show independence vs mutual exclusivity counterexample.  
- CLT simulation: mean of `n` uniform variables.

---

## 8. Further Reading

- Feller, *An Introduction to Probability Theory*, Vol. 1  
- Grimmett & Stirzaker, *Probability and Random Processes*  
- Ross, *Introduction to Probability Models*  
- Durrett, *Probability: Theory and Examples*  

---

*End of module: Probability Foundations*
