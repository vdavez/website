---
slug-title: thinking-in-funnels
date: 2020-03-02T05:45:05-06:00
draft: false
title: 'Thinking in Funnels'
subtitle: Some musings on airport security
images:
  [
    'https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
  ]
---

As I went through security at the airport yesterday, I thought about [Little's Law](/2020/01/cycle-times/). Assuming there were 60 people in line, and it takes 20 seconds to process each person, the average wait time would be 20 minutes for the queue.

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>w</mi><mtext>&#xA0;</mtext><mo stretchy="false">(</mo><mi>a</mi><mi>v</mi><mi>e</mi><mo>.</mo><mi>c</mi><mi>y</mi><mi>c</mi><mi>l</mi><mi>e</mi><mtext>&#xA0;</mtext><mi>t</mi><mi>i</mi><mi>m</mi><mi>e</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn>60</mn><mtext>&#xA0;</mtext><mi>p</mi><mi>e</mi><mi>o</mi><mi>p</mi><mi>l</mi><mi>e</mi></mrow><mrow><mn>3</mn><mtext>&#xA0;</mtext><mi>p</mi><mi>e</mi><mi>o</mi><mi>p</mi><mi>l</mi><mi>e</mi><mrow><mo>/</mo></mrow><mi>m</mi><mi>i</mi><mi>n</mi></mrow></mfrac><mo>=</mo><mn>20</mn><mtext>&#xA0;</mtext><mi>m</mi><mi>i</mi><mi>n</mi></math>

But 20 minutes, for many (including me), can feel like an intolerably long wait.

And, knowing Little's Law, what are the options available to the Transportation Security Administration? One strategy might be to simply tell the officers to process people faster. But that might have a negative effect on security.

Another strategy might be to add processing capacity. That's a lot of what the TSA does in practice; you add more officers and, assuming uniform processing rates, you can reduce the queue size linearly.

A third strategy might be to "break up" the security line into smaller subprocesses to better manage waiting times. In fact, this is also something that TSA does in practice; you go from a single officer who reviews your ID and ticket to multiple conveyer belts and back to a single X-ray machine. That's because people demonstrate more variability in the time it takes to empty their pockets (if they're in TSA Pre Check) and take their shoes off (if they're not). So, by temporarily splitting the process into multiple queues, you are better managing bottlenecks.

A fourth strategy, which is a variation on the third, is to treat the process like a set of "funnels." The problem with the cycle time for the TSA is that, despite relatively quick processing times, you end up with long wait times when there are lots of people in queue. Although we often think of the security checkpoint as the "top of the funnel," it's actually just a step in the overall airport experience. Once you realize that there's an upstream funnel (people arriving at the airport), you can think more broadly. To better manage wait times, you could try to stagger when people arrive in the queue. In reality, managing upstream funnels is a hard challenge, because it requires more coordination of things like flight schedules and the checkout-counter experience.

A fifth strategy might be to triage the queue. Assuming that some people are more concerned about waiting times than others, you could sort people based on their level of concern. TSA effectively does this through TSA Pre Check, using people's "willingness to pay" as a proxy for their level of concern about wait times. There are other ways TSA could triage; for example, they could look at "time to departure."

Ultimately, there are many possible service-design opportunities available for TSA and, of course, efficiency is not the only consideration. But I find it helpful to imagine how you could improve the experience while waiting in line. If, for no other reason, to pass the time.
