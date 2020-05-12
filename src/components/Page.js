import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col, InputGroup, ButtonToolbar, ButtonGroup, Button, Form, Alert } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Star } from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Web3 from "web3";
const genericSchemeJson = require("@daostack/arc/build/contracts/GenericScheme.json");
const genesisProtocolJson = require("@daostack/arc/build/contracts/GenesisProtocol.json");
const web3 = new Web3(Web3.givenProvider);

const LandingPageWrapper = styled.div``;

const BannerSection = styled.div`
    display: block;
    padding 50px 40px;
    background-color: #F9F9F9;
    border-Radius: 15px;
    margin-top: 10px;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 50px 0px 40px 0px;
`;

const LeftNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const votingParams = {
  fast: {
    boostedVotePeriodLimit: 129600, // 1.5 days
    daoBountyConst: 10,
    minimumDaoBounty:  50, // 50 GEN
    queuedVotePeriodLimit: 604800, // 7 days
    queuedVoteRequiredPercentage: 50, // 50%
    preBoostedVotePeriodLimit: 43200, // 12 hours
    proposingRepReward: 10, // 10 REP
    quietEndingPeriod: 86400, // 1 day
    thresholdConst: 1200,
    voteOnBehalf: "0x0000000000000000000000000000000000000000",
    votersReputationLossRatio: 1, // 1%
    activationTime: 0
  },
  normal: {
    boostedVotePeriodLimit: 345600, // 4 days
    daoBountyConst: 10,
    minimumDaoBounty: 150, // 150 GEN
    queuedVotePeriodLimit: 2592000, // 30 days
    queuedVoteRequiredPercentage: 50, // 50%
    preBoostedVotePeriodLimit: 86400, // 1 day
    proposingRepReward: 50, // 50 REP
    quietEndingPeriod: 172800, // 2 day
    thresholdConst: 1200,
    voteOnBehalf: "0x0000000000000000000000000000000000000000",
    votersReputationLossRatio: 4, // 4%
    activationTime: 0
  },
  critical: {
    boostedVotePeriodLimit: 691200, // 8 days
    daoBountyConst: 10,
    minimumDaoBounty: 500, // 500 GEN
    queuedVotePeriodLimit: 5184000, // 60 days
    queuedVoteRequiredPercentage: 50, // 50%
    preBoostedVotePeriodLimit: 172800, // 2 day
    proposingRepReward: 200, // 200 REP
    quietEndingPeriod: 345600, // 4 day
    thresholdConst: 1500,
    voteOnBehalf: "0x0000000000000000000000000000000000000000",
    votersReputationLossRatio: 4, // 4%
    activationTime: 0
  }
};

export default class Page extends Component {
  render() {
    return (
      <LandingPageWrapper>
        <NavWrapper>
          <LeftNav>
            <img src="Dxdao_Landing.svg" alt="Logo" />
          </LeftNav>
        </NavWrapper>
        <BannerSection>
          <Container>
            <form onSubmit={this.createGenericScheme}>
              <Row>
                <Col>
                  <h1>Scheme Deployer</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4 className="mt-3 mb-3">Addresses</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Network</Form.Label>
                    <Form.Control as="select" name="network" id="network" onChange={this.handleChange}>
                      <option value="" disabled selected>Select Network</option>
                      <option value="Rinkeby">Rinkeby</option>
                      <option value="Kovan">Kovan</option>
                      <option value="Mainnet">Mainnet</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                <Form.Group>
                    <Form.Label>Subgraph Version</Form.Label>
                    <Form.Control as="select" name="subgraph" id="subgraph" onChange={this.handleChange}>
                      <option>Select Network first</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Address DAO</Form.Label>
                    <Form.Control onChange={this.handleChange}
                      type="text"
                      name="daoAddress"
                      id="daoAddress"
                      value={this.state.daoAddress}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Address VotingMachine</Form.Label>
                    <Form.Control onChange={this.handleChange}
                      type="text"
                      name="votingMachine"
                      id="votingMachine"
                      placeholder="0x"
                      value={this.state.votingMachine}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Address TargetContract</Form.Label>
                    <Form.Control onChange={this.handleChange}
                      type="text"
                      name="targetContract"
                      id="targetContract"
                      placeholder="0x"
                      value={this.state.targetContract}
                    />
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                  <h4 className="mt-3 mb-3">VotingParams</h4>
                </Col>
              </Row>
              <Row>
                <Col className="mb-3">
                Presets
                  <ButtonToolbar>
                    <ButtonGroup className="mr-2" aria-label="First group">
                      <Button onClick={this.handleChange} name="preset" value="fast">Fast</Button>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2">
                      <Button onClick={this.handleChange} name="preset" value="normal"><Star size={14} className="mb-1"/> Normal</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                      <Button onClick={this.handleChange} name="preset" value="critical">Critical</Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>BoostedVotePeriodLimit</Form.Label>
                    <Form.Control onChange={this.handleChange}
                      type="text"
                      name="boostedVotePeriodLimit"
                      id="boostedVotePeriodLimit"
                      placeholder="0x"
                      value={this.state.boostedVotePeriodLimit}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>DaoBountyConst</Form.Label>
                    <Form.Control onChange={this.handleChange}
                      type="number"
                      name="daoBountyConst"
                      id="daoBountyConst"
                      value={this.state.daoBountyConst}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>MinimumDaoBounty</Form.Label>
                    <Form.Control onChange={this.handleChange}
                      type="number"
                      name="minimumDaoBounty"
                      id="minimumDaoBounty"
                      value={this.state.minimumDaoBounty}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>QueuedVotePeriodLimit</Form.Label>
                    <Form.Control onChange={this.handleChange}
                      type="number"
                      name="queuedVotePeriodLimit"
                      id="queuedVotePeriodLimit"
                      value={this.state.queuedVotePeriodLimit}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>QueuedVoteRequiredPercentage</Form.Label>
                    <Form.Control onChange={this.handleChange}
                      type="number"
                      name="queuedVoteRequiredPercentage"
                      id="queuedVoteRequiredPercentage"
                      value={this.state.queuedVoteRequiredPercentage}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>PreBoostedVotePeriodLimit</Form.Label>
                    <Form.Control onChange={this.handleChange}
                      type="number"
                      name="preBoostedVotePeriodLimit"
                      id="preBoostedVotePeriodLimit"
                      value={this.state.preBoostedVotePeriodLimit}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>ProposingRepReward</Form.Label>
                    <Form.Control onChange={this.handleChange}
                      type="number"
                      name="proposingRepReward"
                      id="proposingRepReward"
                      value={this.state.proposingRepReward}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>QuietEndingPeriod</Form.Label>
                    <Form.Control  onChange={this.handleChange}
                      type="number"
                      name="quietEndingPeriod"
                      id="quietEndingPeriod"
                      value={this.state.quietEndingPeriod}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>ThresholdConst</Form.Label>
                    <Form.Control onChange={this.handleChange}
                      type="number"
                      name="thresholdConst"
                      id="thresholdConst"
                      value={this.state.thresholdConst}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>VoteOnBehalf</Form.Label>
                    <Form.Control onChange={this.handleChange}
                      type="string"
                      name="voteOnBehalf"
                      id="voteOnBehalf"
                      value={this.state.voteOnBehalf}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>VotersReputationLossRatio</Form.Label>
                    <Form.Control onChange={this.handleChange}
                      type="number"
                      name="votersReputationLossRatio"
                      id="votersReputationLossRatio"
                      value={this.state.votersReputationLossRatio}
                    />
                  </Form.Group>
                </Col>
                <Col>
                <Form.Group>
                  <Form.Label>activationTime</Form.Label>
                  <InputGroup>
                      <Form.Control onChange={this.handleChange}
                        type="number"
                        name="activationTime"
                        id="activationTime"
                        value={this.state.activationTime}
                      />
                  </InputGroup>
                </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button type="submit" variant="primary">
                    Create Generic Scheme
                  </Button>{" "}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Alert variant="success" className="mt-3 d-none" id="step1">
                    <div
                      className="spinner-grow spinner-border-sm mr-3"
                      role="status"
                      id="step1Spinner"
                    ></div>
                    <span id="step1Text">
                      Step 1/3 VotingParameter will be generated
                    </span>
                  </Alert>
                  <Alert variant="success" className="mt-3 d-none" id="step2">
                    <div
                      className="spinner-grow spinner-border-sm mr-3"
                      role="status"
                      id="step2Spinner"
                    ></div>
                    <span id="step2Text">
                      Step 2/3 Generic Scheme Contract will be deployed
                    </span>
                  </Alert>
                  <Alert variant="success" className="mt-3 d-none" id="step3">
                    <div
                      className="spinner-grow spinner-border-sm mr-3"
                      role="status"
                      id="step3Spinner"
                    ></div>
                    <span id="step3Text">
                      Step 3/3 GenericScheme will be initialized
                    </span>
                  </Alert>
                </Col>
              </Row>
            </form>
          </Container>
        </BannerSection>
      </LandingPageWrapper>
    );
  }

  constructor(props) {
    super(props)
    this.state = {
      daoAddress: '0x',
      subgraph: '',
      network: '',
      votingMachine: '0x',
      targetContract: '0x',
      boostedVotePeriodLimit: 345600, 
      daoBountyConst: 10,
      minimumDaoBounty: 150, 
      queuedVotePeriodLimit: 2592000, 
      queuedVoteRequiredPercentage: 50, 
      preBoostedVotePeriodLimit: 86400, 
      proposingRepReward: 50,
      quietEndingPeriod: 172800,
      thresholdConst: 1200,
      voteOnBehalf: "0x0000000000000000000000000000000000000000",
      votersReputationLossRatio: 4,
      activationTime: 0,
      startDate: new Date()
    } 
    
    this.handleChange = this.handleChange.bind(this);
      
  }

  async handleChange(event) { 
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "network") {
      if (value === "Rinkeby") {
        this.state.daoAddress = "0x1eb3bcae24d42fde2f90e91d26313ac3946c4764"
      } else if (value === "Mainnet") {
        this.state.daoAddress = "0x519b70055af55a007110b4ff99b0ea33071c720a"
      } else {
        this.state.daoAddress = ""
      }
      
      const migrationFile = await (await fetch('https://raw.githubusercontent.com/daostack/migration/master/migration.json')).json();
      let migrationItems = await migrationFile[value.toLowerCase()].base;
      let keyLength = Object.keys(migrationItems).length
      let subgraph = document.getElementById('subgraph');
      subgraph.options.length = 0;
      
      for (var i = 0; i<=keyLength; i++){
        let version = await Object.keys(migrationItems)[i];
        if(version != null){
          subgraph.options[subgraph.options.length] = new Option(version,version,false,true);
          this.state.subgraph = version;
        }
      }
      this.state.votingMachine = migrationItems[this.state.subgraph].GenesisProtocol;
      this.setState(votingParams[value], () => {
         console.log(this.state)
      });
    }

    if (name === "preset") {
      console.log(value+" preset selected")
      this.setState(votingParams[value], () => {
         console.log(this.state)
      });
    } else {
      this.setState({
        [name]: value
      }, () => {
         console.log(this.state)
      });
    }
} 

  createGenericScheme = async (e) => {
    e.preventDefault();
    let step1 = document.getElementById("step1");
    let step2 = document.getElementById("step2");
    let step3 = document.getElementById("step3");
    const accounts = await window.ethereum.enable();
    const from = accounts[0];
    const gas = 2000000;
    const gasPrice = await web3.eth.getGasPrice();
    const genesisProtocolContract = new web3.eth.Contract(
      genesisProtocolJson.abi,
      this.state.votingMachine,
      {
        from,
        gas,
        gasPrice,
      }
    );

    const parameters = [
      [
        this.state.queuedVoteRequiredPercentage.toString(),
        this.state.queuedVotePeriodLimit.toString(),
        this.state.boostedVotePeriodLimit.toString(),
        this.state.preBoostedVotePeriodLimit.toString(),
        this.state.thresholdConst.toString(),
        this.state.quietEndingPeriod.toString(),
        web3.utils.toWei(this.state.proposingRepReward.toString()),
        this.state.votersReputationLossRatio.toString(),
        web3.utils.toWei(this.state.minimumDaoBounty.toString()),
        this.state.daoBountyConst.toString(),
        this.state.activationTime.toString(),
      ],
      this.state.voteOnBehalf,
    ];

    const genesisProtocolSetParams = genesisProtocolContract.methods.setParameters(
      ...parameters
    );

    step1.classList.add("d-block");
    const result = await genesisProtocolSetParams.send();
    const votingParamHash = await genesisProtocolSetParams.call();
    step1.classList.add("d-block");
    step1.innerHTML = `VotingParamHash is: ${votingParamHash}`;
    console.log(`VotingParamHash is: ${votingParamHash}`);
    const genericSchemeContract = new web3.eth.Contract(
      genericSchemeJson.abi,
      undefined,
      {
        from,
        gas,
        gasPrice,
      }
    );
    const genericSchemeDeployedContract = genericSchemeContract
      .deploy({
        data: genericSchemeJson.bytecode,
        arguments: null,
      })
      .send();
    step2.classList.add("d-block");
    let genericScheme = await genericSchemeDeployedContract;

    console.log(
      `Deployed new GenericScheme instance at ${genericScheme.options.address}`
    );
    step1.classList.add("d-none");
    step2.classList.add("d-block");
    step2.innerHTML = `Deployed new GenericScheme instance at: ${genericScheme.options.address}`;
    const estimate = await genericScheme.methods
      .initialize(this.state.daoAddress, this.state.votingMachine, votingParamHash, this.state.targetContract)
      .estimateGas();
    step3.classList.add("d-block");
    const gsInitialize = await genericScheme.methods
      .initialize(this.state.daoAddress, this.state.votingMachine, votingParamHash, this.state.targetContract)
      .send({ from, gas: estimate });
    step2.classList.add("d-block");
    step3.classList.add("d-block");
    step3.innerHTML = `GenericScheme Initialized and ready to be used at address: ${genericScheme.options.address}`;
  };
}
