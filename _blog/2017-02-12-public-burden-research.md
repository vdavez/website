---
title: public-burden-research
posttitle: "Calculating public burden using OIRA data"
subtitle: "An experiment in using open data to make government better"
date: 2017-02-12
layout: post
newest: true
---

Recently, the new Administration issued an [Executive Order](https://www.whitehouse.gov/the-press-office/2017/01/30/presidential-executive-order-reducing-regulation-and-controlling) aimed at Reducing Regulation and Controlling Regulatory Costs. As part of this effort, the Administration is supposed to offset regulated costs.

So, that got me thinking. The Office of Information and Regulatory Affairs (OIRA) is charged with reviewing not only regulations, but also is charged with reviewing agency's information-collection requests under the Paperwork Reduction Act. And as part of that review, OIRA and the agencies are supposed to track the public burden associated with the information collection.

As a thought experiment, I decided to see whether we could find some low-hanging fruit, namely paper-based information requests. And the results were interesting...

## The analysis

First, we need to find the data. Fortunately, that data is already available in bulk [from OIRA](https://www.reginfo.gov/public/do/PRAXML). Well done, OIRA.

From here, it's simple. First we use [lxml](http://lxml.de/) to parse the XML file.


```python
from lxml import etree
tree = etree.parse('CurrentInventoryReport.xml')
root = tree.getroot()
```

So, now that we have the data and it's parsed, where to begin? Let's see what this data looks like by checking out the first Information Collection Request in the data.


```python
print(str(etree.tostring(root[0], pretty_print = True).decode('UTF-8')))
```

```
    <InformationCollectionRequest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <OMBControlNumber>0503-0007</OMBControlNumber>
            <ICRReferenceNumber>201405-0503-002</ICRReferenceNumber>
            <AgencyCode>0503</AgencyCode>
            <Title>National Appeals Division Customer Service Survey</Title>
            <Abstract>To conduct a customer survey to gather date on the quality of how to make improvements in NAD processes and establish customer service standards.       </Abstract>
            <ICRTypeCode>Revision of a currently approved collection</ICRTypeCode>
            <Expiration>
                <ExpirationDate>2017-08-31-04:00</ExpirationDate>
            </Expiration>
            <ICRStatus>Active</ICRStatus>
            <AgencyContact>
                <Person>
                    <FirstName>Jerry</FirstName>
                    <MiddleName>L</MiddleName>
                    <LastName>Jobe</LastName>
                    <PhoneNumber>703 305-2514</PhoneNumber>
                </Person>
            </AgencyContact>
            <StimulusIndicator>No</StimulusIndicator>
            <HealthcareIndicator>No</HealthcareIndicator>
            <DoddFrankActIndicator>No</DoddFrankActIndicator>
            <AuthorizingStatutes>
                <AuthorizingStatute>
                    <ExecutiveOrder>
                        <EONumber>12862</EONumber>
                        <NameOfEO>Setting Customer Service Standards</NameOfEO>
                    </ExecutiveOrder>
                </AuthorizingStatute>
            </AuthorizingStatutes>
            <Burden>
                <BurdenResponse>
                    <TotalQuantity>2400</TotalQuantity>
                    <PreviousTotalQuantity>2400</PreviousTotalQuantity>
                </BurdenResponse>
                <BurdenHour>
                    <TotalQuantity>353</TotalQuantity>
                    <PreviousTotalQuantity>561</PreviousTotalQuantity>
                </BurdenHour>
                <BurdenCost>
                    <TotalAmount>0</TotalAmount>
                    <PreviousTotalAmount>0</PreviousTotalAmount>
                </BurdenCost>
            </Burden>
            <InformationCollections>
                <InformationCollection>
                    <Title>National Appeals Division Customer Service Survey</Title>
                    <StandardFormIndicator>No</StandardFormIndicator>
                    <ObligationCode>Voluntary</ObligationCode>
                    <FEABusinessReferenceModule>
                        <LineOfBusiness Code="116">Litigation and Judicial Activities</LineOfBusiness>
                        <Subfunction Code="055">Resolution Facilitation</Subfunction>
                    </FEABusinessReferenceModule>
                    <Instruments>
                        <Instrument>
                            <FormNumber>None</FormNumber>
                            <FormName>NAD Customer Survey</FormName>
                            <AvailableElectronically>No</AvailableElectronically>
                            <ElectronicCapability>Paper Only</ElectronicCapability>
                            <InstrumentDocument>
                                <documentType>Form</documentType>
                            </InstrumentDocument>
                        </Instrument>
                    </Instruments>
                    <AffectedPublicCode>
                        <PublicCode>Individuals or Households</PublicCode>
                    </AffectedPublicCode>
                    <NumberResponses>
                        <AnnualQuantity>2000</AnnualQuantity>
                    </NumberResponses>
                    <BurdenHour>
                        <TotalQuantity>333</TotalQuantity>
                        <BurdenHourPerResponse>
                            <ReportingFrequencies>
                                <ReportingFrequency>Annually</ReportingFrequency>
                            </ReportingFrequencies>
                        </BurdenHourPerResponse>
                    </BurdenHour>
                    <BurdenCost>
                        <TotalAmount>0</TotalAmount>
                    </BurdenCost>
                </InformationCollection>
                <InformationCollection>
                    <Title>National Appeals Division Customer Service Survey Non-Respondents</Title>
                    <StandardFormIndicator>No</StandardFormIndicator>
                    <ObligationCode>Voluntary</ObligationCode>
                    <FEABusinessReferenceModule>
                        <LineOfBusiness Code="116">Litigation and Judicial Activities</LineOfBusiness>
                        <Subfunction Code="055">Resolution Facilitation</Subfunction>
                    </FEABusinessReferenceModule>
                    <Instruments>
                        <Instrument>
                            <FormNumber>None</FormNumber>
                            <FormName>NAD Customer Survey</FormName>
                            <AvailableElectronically>No</AvailableElectronically>
                            <ElectronicCapability>Paper Only</ElectronicCapability>
                            <InstrumentDocument>
                                <documentType>Form</documentType>
                            </InstrumentDocument>
                        </Instrument>
                    </Instruments>
                    <AffectedPublicCode>
                        <PublicCode>Individuals or Households</PublicCode>
                    </AffectedPublicCode>
                    <NumberResponses>
                        <AnnualQuantity>400</AnnualQuantity>
                    </NumberResponses>
                    <BurdenHour>
                        <TotalQuantity>20</TotalQuantity>
                        <BurdenHourPerResponse>
                            <ReportingFrequencies>
                                <ReportingFrequency>Annually</ReportingFrequency>
                            </ReportingFrequencies>
                        </BurdenHourPerResponse>
                    </BurdenHour>
                    <BurdenCost>
                        <TotalAmount>0</TotalAmount>
                    </BurdenCost>
                </InformationCollection>
            </InformationCollections>
            <OIRAConclusion>
                <ConcludedDate>
                    <Date>2014-08-27-04:00</Date>
                    <Time>05:41:10.660-04:00</Time>
                </ConcludedDate>
            </OIRAConclusion>
        </InformationCollectionRequest>
```

Well, would you look at that?! There's an `AvailableElectronically` element.

So, how about we try and find all the agencies that have some information collection requests that *are not* available electronically.

To do this, we use `xpath` to find all the Information Collection Requests that has a "AvailableElectronically" element with "No". Then, we simply pick the fields we want to dump into a JSON dict.


```python
results = []

def getInfoRequests(element):
    res = []
    collections = element.xpath('./InformationCollections/InformationCollection')
    for collection in collections:

        res.append({
            "title": str(collection.xpath('./Title/text()')[0]).strip(),
            'obligation': str(collection.xpath('./ObligationCode/text()')[0]).strip(),
            'affected': str(collection.xpath('./AffectedPublicCode/PublicCode/text()')[0].strip()),
            'number_responses': str(collection.xpath('./NumberResponses/AnnualQuantity/text()')[0].strip()),
            'burden_hour': str(collection.xpath('./BurdenHour/TotalQuantity/text()')[0].strip()),
            'frequency': collection.xpath('.//ReportingFrequency/text()'),
        })
    return res

requests = root.xpath('//InformationCollectionRequest[.//AvailableElectronically/text()[. = "No"]]')

for request in requests:
    results.append({
        "agency_code": request.xpath('./AgencyCode//text()')[0],
        "omb_control_number": request.xpath('./OMBControlNumber//text()')[0],
        "icr_reference_number": request.xpath('./ICRReferenceNumber//text()')[0],
        "title": str(request.xpath('./Title//text()')[0]).strip(),
        "abstract": str(request.xpath('./Abstract//text()')[0]).strip(),
        "expiration_date": str(request.xpath('./Expiration/ExpirationDate//text()')[0]).strip(),
        "burden": int(request.xpath('./Burden/BurdenHour/TotalQuantity/text()')[0]),
        "requests": getInfoRequests(request),
        "cost": int(request.xpath('./Burden/BurdenCost/TotalAmount/text()')[0]),
    })
```

Now that we have a JSON dict, time for the payoff. We sum the burden for each Information Collection Request and print the results.


```python
burden = sum([result["burden"] for result in results])
agencies = set([result["agency_code"] for result in results])

print("There are %s information requests that cannot be filed electronically from %s different agencies with a total public burden of %s hours." % (len(results), len(agencies), "{:,}".format(burden)))
```

    There are 1110 information requests that cannot be filed electronically from 149 different agencies with a total public burden of 3,298,793,451 hours.


That's not a typo. That's a total of **3.3 billion hours** of public burden associated with paper-based information requests. Seems like a target-rich environment.

Unfortunately, I've run out of time to really get in there and visualize where to begin. So, for now, I'll simply save the results in a `json` file for later.


```python
import json
with open('results.json', 'w') as fp:
    json.dump(results, fp, indent=2)
```

Hope you enjoyed this little exploration in how open government data can be used to make government work better. It's important to note that none of this would be possible if OIRA did not publish the data in bulk... Again, nice work OIRA.
