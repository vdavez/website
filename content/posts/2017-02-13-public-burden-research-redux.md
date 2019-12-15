---
date: "2017-02-13T00:00:00Z"
newest: true
posttitle: Calculating public burden using OIRA data -- Part Two
subtitle: An experiment in using open data to make government better
title: public-burden-research-redux
unsafe: true
---

<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Yesterday, I published <a href="https://esq.io/blog/posts/public-burden-research/">an article</a> about using open government data to hunt for paper-based information requests by the government. Based on the data, it looked like there are still a <em>lot</em> of hours spent filling out paper-based forms. As I noted, though, I ran out of time to do careful analysis. So, today, let's explore deeper.</p>
<p>First, we'll create a histogram to look for the distributions of requests. To do so, we'll use <a href="http://pandas.pydata.org/">pandas</a> to examine the results data, and specifically the <a href="http://pandas.pydata.org/pandas-docs/stable/visualization.html#histograms">histogram</a> method.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[1]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># Set up the graphing environment. Because I&#39;m using jupyter notebooks, first I need to tell</span>
<span class="c1"># it to show the graphs inline. I also use the `ggplot` style, because it&#39;s less hideous. </span>
<span class="o">%</span><span class="k">matplotlib</span> inline
<span class="kn">import</span> <span class="nn">matplotlib</span>
<span class="n">matplotlib</span><span class="o">.</span><span class="n">style</span><span class="o">.</span><span class="n">use</span><span class="p">(</span><span class="s1">&#39;ggplot&#39;</span><span class="p">)</span>
</pre></div>

</div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[2]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
<span class="n">data</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">read_json</span><span class="p">(</span><span class="s1">&#39;results.json&#39;</span><span class="p">)</span>
<span class="n">data</span><span class="o">.</span><span class="n">burden</span><span class="o">.</span><span class="n">plot</span><span class="o">.</span><span class="n">hist</span><span class="p">()</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">
<div class="prompt output_prompt">Out[2]:</div>



<div class="output_text output_subarea output_execute_result">
<pre>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7fca4799d358&gt;</pre>
</div>

</div>

<div class="output_area">
<div class="prompt"></div>



<div class="output_png output_subarea ">
<img src="data:image/png;base64,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
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Wait. Hold on right there. That's not what you'd expect to see. That looks like there's an outlier. Let's see what that might be... To do so, we look for the top ten burdens.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[3]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">data</span><span class="p">[[</span><span class="s2">&quot;burden&quot;</span><span class="p">,</span> <span class="s2">&quot;title&quot;</span><span class="p">]]</span> <span class="o">.</span><span class="n">sort_values</span><span class="p">(</span><span class="s1">&#39;burden&#39;</span><span class="p">,</span> <span class="n">ascending</span><span class="o">=</span><span class="kc">False</span><span class="p">)</span><span class="o">.</span><span class="n">head</span><span class="p">(</span><span class="mi">10</span><span class="p">)</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">
<div class="prompt output_prompt">Out[3]:</div>


<div class="output_html rendered_html output_subarea output_execute_result">
<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>burden</th>
      <th>title</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>720</th>
      <td>2997500000</td>
      <td>U. S. Business Income Tax Return</td>
    </tr>
    <tr>
      <th>729</th>
      <td>48731780</td>
      <td>IRA Contribution Information</td>
    </tr>
    <tr>
      <th>719</th>
      <td>34115874</td>
      <td>Form 1099-DIV--Dividends and Distributions</td>
    </tr>
    <tr>
      <th>718</th>
      <td>24951529</td>
      <td>Return of Organization Exempt From Income Tax ...</td>
    </tr>
    <tr>
      <th>248</th>
      <td>20036012</td>
      <td>2017-2018 Free Application for Federal Student...</td>
    </tr>
    <tr>
      <th>509</th>
      <td>13500230</td>
      <td>National Fire Incident Reporting System (NFIRS...</td>
    </tr>
    <tr>
      <th>717</th>
      <td>10880812</td>
      <td>Employer's Annual Tax Return for Agricultural ...</td>
    </tr>
    <tr>
      <th>497</th>
      <td>9902378</td>
      <td>Arrival and Departure Record</td>
    </tr>
    <tr>
      <th>449</th>
      <td>7736084</td>
      <td>Physician Quality Reporting System (PQRS) (CMS...</td>
    </tr>
    <tr>
      <th>713</th>
      <td>7041290</td>
      <td>Customer Due Diligence Requirements for Financ...</td>
    </tr>
  </tbody>
</table>
</div>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Oh dear. Looks like we've got a pretty obvious mistake here: "U.S. Business Income Tax Return" can <em>definitely</em> be filed electronically. Same with the other things on the list. And that one outlier accounts for 3 billion of the 3.3 billion hours. Oof. So what gives?</p>
<p>Well, it turns out that the way that OIRA displays the burden data is that if <em>any</em> of the forms that are part of an information collection request is not electronically available, then the burden for <em>all</em> of the forms gets aggregated. And unfortunately, there doesn't seem to be an obvious way to back out the other forms. So, that's not very useful, unfortunately.</p>
<p>Let's see what the total burden is if you remove the top 20% of information collection requests.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[4]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="s2">&quot;</span><span class="si">{:,}</span><span class="s2"> hours&quot;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="n">data</span><span class="o">.</span><span class="n">burden</span><span class="o">.</span><span class="n">sum</span><span class="p">()</span> <span class="o">-</span> <span class="n">data</span><span class="o">.</span><span class="n">sort_values</span><span class="p">(</span><span class="s1">&#39;burden&#39;</span><span class="p">,</span> <span class="n">ascending</span><span class="o">=</span><span class="kc">False</span><span class="p">)</span><span class="o">.</span><span class="n">head</span><span class="p">(</span><span class="mi">220</span><span class="p">)</span><span class="o">.</span><span class="n">burden</span><span class="o">.</span><span class="n">sum</span><span class="p">())</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">
<div class="prompt output_prompt">Out[4]:</div>



<div class="output_text output_subarea output_execute_result">
<pre>&#39;5,589,316 hours&#39;</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>So, that feels a lot more sane, and a lot less exciting. There are only <strong>5,589,316 hours</strong> of public burden for everything but the top 20% of information collection requests.</p>
<p>In the end, this is a great lesson in how a data schema can lead to incorrect conclusions.</p>
<p>Still, we have some good data near the bottom of the chart.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[5]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">data</span><span class="o">.</span><span class="n">sort_values</span><span class="p">(</span><span class="s1">&#39;burden&#39;</span><span class="p">)</span><span class="o">.</span><span class="n">head</span><span class="p">(</span><span class="mi">890</span><span class="p">)</span><span class="o">.</span><span class="n">burden</span><span class="o">.</span><span class="n">plot</span><span class="o">.</span><span class="n">hist</span><span class="p">(</span><span class="n">bins</span><span class="o">=</span><span class="mi">30</span><span class="p">)</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">
<div class="prompt output_prompt">Out[5]:</div>



<div class="output_text output_subarea output_execute_result">
<pre>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7fca467f8080&gt;</pre>
</div>

</div>

<div class="output_area">
<div class="prompt"></div>



<div class="output_png output_subarea ">
<img src="data:image/png;base64,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
50cg579kO6cjEKcjmoEcE0D0YGQBALBiZIGrGsiIAcDYRVgg4ob6IjwX9YHhR1ggao3UqIbwAa5E
WACDRKgglkRtWBw9elS7du1SKBTSsmXLtHLlypEuCaPc1f5x/7K7wYb7cwdryO9S23f4K1SDWBCV
YREKhbRz50796le/Ulpamp566illZ2fruuuuG+nSgJg2UtebBiLaR3KjteeoDIv3339f1157raZN
myZJuuWWW1RbW0tYAP8z1P/gnL/7liE93mjw2XM4FCPLaA+pryoqw8Ln8yktLS28nJaWpn/9618j
WBGAgRjJW66j/caI0Soqw8KpqqoqVVVVSZJKSko0ffr0wR3ob3VDWBUAjD1R+QS3x+NRR0dHeLmj
o0Mej+eK7fLz81VSUqKSkpKv9HnFxcVfaf+xINbPAf3TP64uKsNi1qxZ+vDDD9XW1qZLly7p8OHD
ys7OHumyACBmReU0VHx8vNasWaP169crFArptttu09e//vWRLgsAYlZUhoUk3Xjjjbrxxhsj8ln5
+fkR+ZxoFuvngP7pH1fnMsaYkS4CABDdovKaBQAgukTtNFSkjKXXimzevFn19fVKSUlRaWmpJKm7
u1tlZWW6cOGCpkyZoscff1xJSUkyxmjXrl1qaGjQhAkTVFBQoIyMDEnSgQMHtHfvXknSPffco7y8
PEnSmTNnVFlZqUAgoIULF2r16tVyuVwj0usXaW9vV2VlpT766CO5XC7l5+dr+fLlMXMOAoGAnnnm
GV26dEnBYFA5OTlatWqV2traVF5eLr/fr4yMDBUWFiohIUF9fX2qqKjQmTNnlJycrKKiIk2dOlWS
tG/fPlVXVysuLk6rV6/WggULJI2O35dQKKTi4mJ5PB4VFxfHXP/DxsSwYDBo1q5da1pbW01fX595
4oknzLlz50a6rEFramoyp0+fNj/96U/D61588UWzb98+Y4wx+/btMy+++KIxxpgjR46Y9evXm1Ao
ZE6dOmWeeuopY4wxfr/f/PjHPzZ+v7/f340xpri42Jw6dcqEQiGzfv16U19fH+EOr87n85nTp08b
Y4zp7e0169atM+fOnYuZcxAKhczFixeNMcb09fWZp556ypw6dcqUlpaad9991xhjzLZt28xbb71l
jDHm73//u9m2bZsxxph3333X/P73vzfGGHPu3DnzxBNPmEAgYM6fP2/Wrl1rgsHgqPl9ef311015
ebn5zW9+Y4wxMdf/cInpaajPvlYkISEh/FqR0WrevHlKSkrqt662tlZLliyRJC1ZsiTcX11dnXJz
c+VyuTR37lz19PSos7NTR48e1Q033KCkpCQlJSXphhtu0NGjR9XZ2amLFy9q7ty5crlcys3Njbpz
lZqaGh4ZTJw4Uenp6fL5fDFzDlwul6655hpJUjAYVDAYlMvlUlNTk3JyciRJeXl5/fr/dMSUk5Oj
xsZGGWNUW1urW265RePGjdPUqVN17bXX6v333x8Vvy8dHR2qr6/XsmXLJEnGmJjqfzjFdFh80WtF
fD7fCFY09Lq6upSamipJmjx5srq6uiRd7t3r9Ya3+7T3z58Tj8fzheuj/Vy1tbXp7Nmzmj17dkyd
g1AopCeffFKPPvqosrKyNG3aNLndbsXHx0v6/16k/v//x8fHy+12y+/3j+r+d+/erYceeig8Nej3
+2Oq/+EU02ERa1wuV9TMrw+nTz75RKWlpXrkkUfkdrv7/Wysn4O4uDht2LBBW7du1enTp9XS0jLS
JUXMkSNHlJKSEh5dYmjF9AVup68VGc1SUlLU2dmp1NRUdXZ2atKkSZIu997e3h7e7tPePR6PTp48
GV7v8/k0b968UXOuLl26pNLSUt1666266aabJMXeOZCkxMREZWZmqrm5Wb29vQoGg4qPj5fP5wvX
/Gk/aWlpCgaD6u3tVXJy8hV9fnafaO7/1KlTqqurU0NDgwKBgC5evKjdu3fHTP/DLaZHFrHwWpHs
7GwdPHhQknTw4EEtXrw4vP7QoUMyxqi5uVlut1upqalasGCBjh07pu7ubnV3d+vYsWNasGCBUlNT
NXHiRDU3N8sYo0OHDkXduTLGaOvWrUpPT9cdd9wRXh8r5+Djjz9WT0+PpMt3Rh0/flzp6enKzMxU
TU2NpMt3eX1a86JFi3TgwAFJUk1NjTIzM+VyuZSdna3Dhw+rr69PbW1t+vDDDzV79uyo/3154IEH
tHXrVlVWVqqoqEjz58/XunXrYqb/4RbzD+XV19frhRdeCL9W5J577hnpkgatvLxcJ0+elN/vV0pK
ilatWqXFixerrKxM7e3tV9w2unPnTh07dkzjx49XQUGBZs2aJUmqrq7Wvn37JF2+bfS2226TJJ0+
fVqbN29WIBDQggULtGbNmqia0nnvvff09NNPa8aMGeG67r//fs2ZMycmzsEHH3ygyspKhUIhGWN0
8803695779X58+dVXl6u7u5uzZw5U4WFhRo3bpwCgYAqKip09uxZJSUlqaioKPwdMnv37tXbb7+t
uLg4PfLII1q4cKGk0fP70tTUpNdff13FxcUx2f9wiPmwAADYxfQ0FADAGcICAGBFWAAArAgLAIAV
YQEAsCIsAABWhAUAwIqwAABY/R+lovdF5QdI9AAAAABJRU5ErkJggg==
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>In other words, there are a lot of information requests that account for a couple hundred hours of public burden. Not a surprising result, but perhaps even more useful in the end. This result means that there are about 200 forms in the middle that account for much of the remaining burden hours. Now, <em>that</em> seems like a good place to start.</p>

</div>
</div>
</div>
