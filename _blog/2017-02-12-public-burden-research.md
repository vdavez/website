---
title: public-burden-research
posttitle: "Calculating public burden using OIRA data"
subtitle: "An experiment in using open data to make government better"
date: 2017-02-12
layout: post
newest: true
---

<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Recently, the new Administration issued an <a href="https://www.whitehouse.gov/the-press-office/2017/01/30/presidential-executive-order-reducing-regulation-and-controlling">Executive Order</a> aimed at Reducing Regulation and Controlling Regulatory Costs. As part of this effort, the Administration is supposed to offset regulated costs.</p>
<p>So, that got me thinking. The Office of Information and Regulatory Affairs (OIRA) is charged with reviewing not only regulations, but also is charged with reviewing agency's information-collection requests under the Paperwork Reduction Act. And as part of that review, OIRA and the agencies are supposed to track the public burden associated with the information collection.</p>
<p>As a thought experiment, I decided to see whether we could find some low-hanging fruit, namely paper-based information requests. And the results were interesting...</p>
<h2 id="The-analysis">The analysis<a class="anchor-link" href="#The-analysis">&#182;</a></h2><p>First, we need to find the data. Fortunately, that data is already available in bulk <a href="https://www.reginfo.gov/public/do/PRAXML">from OIRA</a>. Well done, OIRA.</p>
<p>From here, it's simple. First we use <a href="http://lxml.de/">lxml</a> to parse the XML file.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[1]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">from</span> <span class="nn">lxml</span> <span class="k">import</span> <span class="n">etree</span>
<span class="n">tree</span> <span class="o">=</span> <span class="n">etree</span><span class="o">.</span><span class="n">parse</span><span class="p">(</span><span class="s1">&#39;CurrentInventoryReport.xml&#39;</span><span class="p">)</span>
<span class="n">root</span> <span class="o">=</span> <span class="n">tree</span><span class="o">.</span><span class="n">getroot</span><span class="p">()</span>
</pre></div>

</div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>So, now that we have the data and it's parsed, where to begin? Let's see what this data looks like by checking out the first Information Collection Request in the data.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[2]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="nb">str</span><span class="p">(</span><span class="n">etree</span><span class="o">.</span><span class="n">tostring</span><span class="p">(</span><span class="n">root</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">pretty_print</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span><span class="o">.</span><span class="n">decode</span><span class="p">(</span><span class="s1">&#39;UTF-8&#39;</span><span class="p">)))</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">
<div class="prompt"></div>

<div class="output_subarea output_stream output_stdout output_text">
<pre>&lt;InformationCollectionRequest xmlns:xsi=&#34;http://www.w3.org/2001/XMLSchema-instance&#34;&gt;
        &lt;OMBControlNumber&gt;0503-0007&lt;/OMBControlNumber&gt;
        &lt;ICRReferenceNumber&gt;201405-0503-002&lt;/ICRReferenceNumber&gt;
        &lt;AgencyCode&gt;0503&lt;/AgencyCode&gt;
        &lt;Title&gt;National Appeals Division Customer Service Survey&lt;/Title&gt;
        &lt;Abstract&gt;To conduct a customer survey to gather date on the quality of how to make improvements in NAD processes and establish customer service standards.       &lt;/Abstract&gt;
        &lt;ICRTypeCode&gt;Revision of a currently approved collection&lt;/ICRTypeCode&gt;
        &lt;Expiration&gt;
            &lt;ExpirationDate&gt;2017-08-31-04:00&lt;/ExpirationDate&gt;
        &lt;/Expiration&gt;
        &lt;ICRStatus&gt;Active&lt;/ICRStatus&gt;
        &lt;AgencyContact&gt;
            &lt;Person&gt;
                &lt;FirstName&gt;Jerry&lt;/FirstName&gt;
                &lt;MiddleName&gt;L&lt;/MiddleName&gt;
                &lt;LastName&gt;Jobe&lt;/LastName&gt;
                &lt;PhoneNumber&gt;703 305-2514&lt;/PhoneNumber&gt;
            &lt;/Person&gt;
        &lt;/AgencyContact&gt;
        &lt;StimulusIndicator&gt;No&lt;/StimulusIndicator&gt;
        &lt;HealthcareIndicator&gt;No&lt;/HealthcareIndicator&gt;
        &lt;DoddFrankActIndicator&gt;No&lt;/DoddFrankActIndicator&gt;
        &lt;AuthorizingStatutes&gt;
            &lt;AuthorizingStatute&gt;
                &lt;ExecutiveOrder&gt;
                    &lt;EONumber&gt;12862&lt;/EONumber&gt;
                    &lt;NameOfEO&gt;Setting Customer Service Standards&lt;/NameOfEO&gt;
                &lt;/ExecutiveOrder&gt;
            &lt;/AuthorizingStatute&gt;
        &lt;/AuthorizingStatutes&gt;
        &lt;Burden&gt;
            &lt;BurdenResponse&gt;
                &lt;TotalQuantity&gt;2400&lt;/TotalQuantity&gt;
                &lt;PreviousTotalQuantity&gt;2400&lt;/PreviousTotalQuantity&gt;
            &lt;/BurdenResponse&gt;
            &lt;BurdenHour&gt;
                &lt;TotalQuantity&gt;353&lt;/TotalQuantity&gt;
                &lt;PreviousTotalQuantity&gt;561&lt;/PreviousTotalQuantity&gt;
            &lt;/BurdenHour&gt;
            &lt;BurdenCost&gt;
                &lt;TotalAmount&gt;0&lt;/TotalAmount&gt;
                &lt;PreviousTotalAmount&gt;0&lt;/PreviousTotalAmount&gt;
            &lt;/BurdenCost&gt;
        &lt;/Burden&gt;
        &lt;InformationCollections&gt;
            &lt;InformationCollection&gt;
                &lt;Title&gt;National Appeals Division Customer Service Survey&lt;/Title&gt;
                &lt;StandardFormIndicator&gt;No&lt;/StandardFormIndicator&gt;
                &lt;ObligationCode&gt;Voluntary&lt;/ObligationCode&gt;
                &lt;FEABusinessReferenceModule&gt;
                    &lt;LineOfBusiness Code=&#34;116&#34;&gt;Litigation and Judicial Activities&lt;/LineOfBusiness&gt;
                    &lt;Subfunction Code=&#34;055&#34;&gt;Resolution Facilitation&lt;/Subfunction&gt;
                &lt;/FEABusinessReferenceModule&gt;
                &lt;Instruments&gt;
                    &lt;Instrument&gt;
                        &lt;FormNumber&gt;None&lt;/FormNumber&gt;
                        &lt;FormName&gt;NAD Customer Survey&lt;/FormName&gt;
                        &lt;AvailableElectronically&gt;No&lt;/AvailableElectronically&gt;
                        &lt;ElectronicCapability&gt;Paper Only&lt;/ElectronicCapability&gt;
                        &lt;InstrumentDocument&gt;
                            &lt;documentType&gt;Form&lt;/documentType&gt;
                        &lt;/InstrumentDocument&gt;
                    &lt;/Instrument&gt;
                &lt;/Instruments&gt;
                &lt;AffectedPublicCode&gt;
                    &lt;PublicCode&gt;Individuals or Households&lt;/PublicCode&gt;
                &lt;/AffectedPublicCode&gt;
                &lt;NumberResponses&gt;
                    &lt;AnnualQuantity&gt;2000&lt;/AnnualQuantity&gt;
                &lt;/NumberResponses&gt;
                &lt;BurdenHour&gt;
                    &lt;TotalQuantity&gt;333&lt;/TotalQuantity&gt;
                    &lt;BurdenHourPerResponse&gt;
                        &lt;ReportingFrequencies&gt;
                            &lt;ReportingFrequency&gt;Annually&lt;/ReportingFrequency&gt;
                        &lt;/ReportingFrequencies&gt;
                    &lt;/BurdenHourPerResponse&gt;
                &lt;/BurdenHour&gt;
                &lt;BurdenCost&gt;
                    &lt;TotalAmount&gt;0&lt;/TotalAmount&gt;
                &lt;/BurdenCost&gt;
            &lt;/InformationCollection&gt;
            &lt;InformationCollection&gt;
                &lt;Title&gt;National Appeals Division Customer Service Survey Non-Respondents&lt;/Title&gt;
                &lt;StandardFormIndicator&gt;No&lt;/StandardFormIndicator&gt;
                &lt;ObligationCode&gt;Voluntary&lt;/ObligationCode&gt;
                &lt;FEABusinessReferenceModule&gt;
                    &lt;LineOfBusiness Code=&#34;116&#34;&gt;Litigation and Judicial Activities&lt;/LineOfBusiness&gt;
                    &lt;Subfunction Code=&#34;055&#34;&gt;Resolution Facilitation&lt;/Subfunction&gt;
                &lt;/FEABusinessReferenceModule&gt;
                &lt;Instruments&gt;
                    &lt;Instrument&gt;
                        &lt;FormNumber&gt;None&lt;/FormNumber&gt;
                        &lt;FormName&gt;NAD Customer Survey&lt;/FormName&gt;
                        &lt;AvailableElectronically&gt;No&lt;/AvailableElectronically&gt;
                        &lt;ElectronicCapability&gt;Paper Only&lt;/ElectronicCapability&gt;
                        &lt;InstrumentDocument&gt;
                            &lt;documentType&gt;Form&lt;/documentType&gt;
                        &lt;/InstrumentDocument&gt;
                    &lt;/Instrument&gt;
                &lt;/Instruments&gt;
                &lt;AffectedPublicCode&gt;
                    &lt;PublicCode&gt;Individuals or Households&lt;/PublicCode&gt;
                &lt;/AffectedPublicCode&gt;
                &lt;NumberResponses&gt;
                    &lt;AnnualQuantity&gt;400&lt;/AnnualQuantity&gt;
                &lt;/NumberResponses&gt;
                &lt;BurdenHour&gt;
                    &lt;TotalQuantity&gt;20&lt;/TotalQuantity&gt;
                    &lt;BurdenHourPerResponse&gt;
                        &lt;ReportingFrequencies&gt;
                            &lt;ReportingFrequency&gt;Annually&lt;/ReportingFrequency&gt;
                        &lt;/ReportingFrequencies&gt;
                    &lt;/BurdenHourPerResponse&gt;
                &lt;/BurdenHour&gt;
                &lt;BurdenCost&gt;
                    &lt;TotalAmount&gt;0&lt;/TotalAmount&gt;
                &lt;/BurdenCost&gt;
            &lt;/InformationCollection&gt;
        &lt;/InformationCollections&gt;
        &lt;OIRAConclusion&gt;
            &lt;ConcludedDate&gt;
                &lt;Date&gt;2014-08-27-04:00&lt;/Date&gt;
                &lt;Time&gt;05:41:10.660-04:00&lt;/Time&gt;
            &lt;/ConcludedDate&gt;
        &lt;/OIRAConclusion&gt;
    &lt;/InformationCollectionRequest&gt;


</pre>
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
<p>Well, would you look at that?! There's an <code>AvailableElectronically</code> element.</p>
<p>So, how about we try and find all the agencies that have some information collection requests that <em>are not</em> available electronically.</p>
<p>To do this, we use <code>xpath</code> to find all the Information Collection Requests that has a "AvailableElectronically" element with "No". Then, we simply pick the fields we want to dump into a Python dict.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[3]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">results</span> <span class="o">=</span> <span class="p">[]</span>

<span class="k">def</span> <span class="nf">getInfoRequests</span><span class="p">(</span><span class="n">element</span><span class="p">):</span>
    <span class="n">res</span> <span class="o">=</span> <span class="p">[]</span>
    <span class="n">collections</span> <span class="o">=</span> <span class="n">element</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;./InformationCollections/InformationCollection&#39;</span><span class="p">)</span>
    <span class="k">for</span> <span class="n">collection</span> <span class="ow">in</span> <span class="n">collections</span><span class="p">:</span>

        <span class="n">res</span><span class="o">.</span><span class="n">append</span><span class="p">({</span>
            <span class="s2">&quot;title&quot;</span><span class="p">:</span> <span class="nb">str</span><span class="p">(</span><span class="n">collection</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;./Title/text()&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">])</span><span class="o">.</span><span class="n">strip</span><span class="p">(),</span>
            <span class="s1">&#39;obligation&#39;</span><span class="p">:</span> <span class="nb">str</span><span class="p">(</span><span class="n">collection</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;./ObligationCode/text()&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">])</span><span class="o">.</span><span class="n">strip</span><span class="p">(),</span>
            <span class="s1">&#39;affected&#39;</span><span class="p">:</span> <span class="nb">str</span><span class="p">(</span><span class="n">collection</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;./AffectedPublicCode/PublicCode/text()&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span><span class="o">.</span><span class="n">strip</span><span class="p">()),</span>
            <span class="s1">&#39;number_responses&#39;</span><span class="p">:</span> <span class="nb">str</span><span class="p">(</span><span class="n">collection</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;./NumberResponses/AnnualQuantity/text()&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span><span class="o">.</span><span class="n">strip</span><span class="p">()),</span>
            <span class="s1">&#39;burden_hour&#39;</span><span class="p">:</span> <span class="nb">str</span><span class="p">(</span><span class="n">collection</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;./BurdenHour/TotalQuantity/text()&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span><span class="o">.</span><span class="n">strip</span><span class="p">()),</span>
            <span class="s1">&#39;frequency&#39;</span><span class="p">:</span> <span class="n">collection</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;.//ReportingFrequency/text()&#39;</span><span class="p">),</span>
        <span class="p">})</span>
    <span class="k">return</span> <span class="n">res</span>

<span class="n">requests</span> <span class="o">=</span> <span class="n">root</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;//InformationCollectionRequest[.//AvailableElectronically/text()[. = &quot;No&quot;]]&#39;</span><span class="p">)</span>

<span class="k">for</span> <span class="n">request</span> <span class="ow">in</span> <span class="n">requests</span><span class="p">:</span>
    <span class="n">results</span><span class="o">.</span><span class="n">append</span><span class="p">({</span>
        <span class="s2">&quot;agency_code&quot;</span><span class="p">:</span> <span class="n">request</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;./AgencyCode//text()&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span>
        <span class="s2">&quot;omb_control_number&quot;</span><span class="p">:</span> <span class="n">request</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;./OMBControlNumber//text()&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span>
        <span class="s2">&quot;icr_reference_number&quot;</span><span class="p">:</span> <span class="n">request</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;./ICRReferenceNumber//text()&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span>
        <span class="s2">&quot;title&quot;</span><span class="p">:</span> <span class="nb">str</span><span class="p">(</span><span class="n">request</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;./Title//text()&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">])</span><span class="o">.</span><span class="n">strip</span><span class="p">(),</span>
        <span class="s2">&quot;abstract&quot;</span><span class="p">:</span> <span class="nb">str</span><span class="p">(</span><span class="n">request</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;./Abstract//text()&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">])</span><span class="o">.</span><span class="n">strip</span><span class="p">(),</span>
        <span class="s2">&quot;expiration_date&quot;</span><span class="p">:</span> <span class="nb">str</span><span class="p">(</span><span class="n">request</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;./Expiration/ExpirationDate//text()&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">])</span><span class="o">.</span><span class="n">strip</span><span class="p">(),</span>
        <span class="s2">&quot;burden&quot;</span><span class="p">:</span> <span class="nb">int</span><span class="p">(</span><span class="n">request</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;./Burden/BurdenHour/TotalQuantity/text()&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]),</span>
        <span class="s2">&quot;requests&quot;</span><span class="p">:</span> <span class="n">getInfoRequests</span><span class="p">(</span><span class="n">request</span><span class="p">),</span>
        <span class="s2">&quot;cost&quot;</span><span class="p">:</span> <span class="nb">int</span><span class="p">(</span><span class="n">request</span><span class="o">.</span><span class="n">xpath</span><span class="p">(</span><span class="s1">&#39;./Burden/BurdenCost/TotalAmount/text()&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]),</span>
    <span class="p">})</span>
</pre></div>

</div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Now that we have a Python dict, time for the payoff. We sum the burden for each Information Collection Request and print the results.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[4]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">burden</span> <span class="o">=</span> <span class="nb">sum</span><span class="p">([</span><span class="n">result</span><span class="p">[</span><span class="s2">&quot;burden&quot;</span><span class="p">]</span> <span class="k">for</span> <span class="n">result</span> <span class="ow">in</span> <span class="n">results</span><span class="p">])</span>
<span class="n">agencies</span> <span class="o">=</span> <span class="nb">set</span><span class="p">([</span><span class="n">result</span><span class="p">[</span><span class="s2">&quot;agency_code&quot;</span><span class="p">]</span> <span class="k">for</span> <span class="n">result</span> <span class="ow">in</span> <span class="n">results</span><span class="p">])</span>

<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;There are </span><span class="si">%s</span><span class="s2"> information requests that cannot be filed electronically from </span><span class="si">%s</span><span class="s2"> different agencies with a total public burden of </span><span class="si">%s</span><span class="s2"> hours.&quot;</span> <span class="o">%</span> <span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">results</span><span class="p">),</span> <span class="nb">len</span><span class="p">(</span><span class="n">agencies</span><span class="p">),</span> <span class="s2">&quot;</span><span class="si">{:,}</span><span class="s2">&quot;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="n">burden</span><span class="p">)))</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">
<div class="prompt"></div>

<div class="output_subarea output_stream output_stdout output_text">
<pre>There are 1110 information requests that cannot be filed electronically from 149 different agencies with a total public burden of 3,298,793,451 hours.
</pre>
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
<p>That's not a typo. That's a total of <strong>3.3 billion hours</strong> of public burden associated with paper-based information requests. Seems like a target-rich environment.</p>
<p>Unfortunately, I've run out of time to really get in there and visualize where to begin. So, for now, I'll simply save the results in a <code>json</code> file for later.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[5]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">import</span> <span class="nn">json</span>
<span class="k">with</span> <span class="nb">open</span><span class="p">(</span><span class="s1">&#39;results.json&#39;</span><span class="p">,</span> <span class="s1">&#39;w&#39;</span><span class="p">)</span> <span class="k">as</span> <span class="n">fp</span><span class="p">:</span>
    <span class="n">json</span><span class="o">.</span><span class="n">dump</span><span class="p">(</span><span class="n">results</span><span class="p">,</span> <span class="n">fp</span><span class="p">,</span> <span class="n">indent</span><span class="o">=</span><span class="mi">2</span><span class="p">)</span>
</pre></div>

</div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Hope you enjoyed this little exploration in how open government data can be used to make government work better. It's important to note that none of this would be possible if OIRA did not publish the data in bulk... Again, nice work OIRA.</p>

</div>
</div>
</div>
