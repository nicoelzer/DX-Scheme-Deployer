import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
                    <Form.Label>Address DAO</Form.Label>
                    <Form.Control
                      type="text"
                      name="daoAddress"
                      id="daoAddress"
                      placeholder="0x"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Address VotingMachine</Form.Label>
                    <Form.Control
                      type="text"
                      name="votingMachine"
                      id="votingMachine"
                      placeholder="0x"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Address TargetContract</Form.Label>
                    <Form.Control
                      type="text"
                      name="targetContract"
                      id="targetContract"
                      placeholder="0x"
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
                <Col>
                  <Form.Group>
                    <Form.Label>BoostedVotePeriodLimit</Form.Label>
                    <Form.Control
                      type="number"
                      name="boostedVotePeriodLimit"
                      id="boostedVotePeriodLimit"
                      placeholder="0x"
                      defaultValue="129600"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>DaoBountyConst</Form.Label>
                    <Form.Control
                      type="number"
                      name="daoBountyConst"
                      id="daoBountyConst"
                      defaultValue="10"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>MinimumDaoBounty</Form.Label>
                    <Form.Control
                      type="number"
                      name="minimumDaoBounty"
                      id="minimumDaoBounty"
                      defaultValue="50"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>QueuedVotePeriodLimit</Form.Label>
                    <Form.Control
                      type="number"
                      name="queuedVotePeriodLimit"
                      id="queuedVotePeriodLimit"
                      defaultValue="604800"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>QueuedVoteRequiredPercentage</Form.Label>
                    <Form.Control
                      type="number"
                      name="queuedVoteRequiredPercentage"
                      id="queuedVoteRequiredPercentage"
                      defaultValue="50"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>PreBoostedVotePeriodLimit</Form.Label>
                    <Form.Control
                      type="number"
                      name="preBoostedVotePeriodLimit"
                      id="preBoostedVotePeriodLimit"
                      defaultValue="43200"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>ProposingRepReward</Form.Label>
                    <Form.Control
                      type="number"
                      name="proposingRepReward"
                      id="proposingRepReward"
                      defaultValue="10"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>QuietEndingPeriod</Form.Label>
                    <Form.Control
                      type="number"
                      name="quietEndingPeriod"
                      id="quietEndingPeriod"
                      defaultValue="86400"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>ThresholdConst</Form.Label>
                    <Form.Control
                      type="number"
                      name="thresholdConst"
                      id="thresholdConst"
                      defaultValue="1200"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>VoteOnBehalf</Form.Label>
                    <Form.Control
                      type="string"
                      name="voteOnBehalf"
                      id="voteOnBehalf"
                      defaultValue="0x0000000000000000000000000000000000000000"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>VotersReputationLossRatio</Form.Label>
                    <Form.Control
                      type="number"
                      name="votersReputationLossRatio"
                      id="votersReputationLossRatio"
                      defaultValue="1"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>ActivationTime</Form.Label>
                    <Form.Control
                      type="number"
                      name="activationTime"
                      id="activationTime"
                      defaultValue="1590105660"
                    />
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

  createGenericScheme = async (e) => {
    e.preventDefault();
    let step1 = document.getElementById("step1");
    let step2 = document.getElementById("step2");
    let step3 = document.getElementById("step3");
    let votingMachine = document.getElementById("votingMachine").value;
    let targetContract = document.getElementById("targetContract").value;
    let daoAddress = document.getElementById("daoAddress").value;
    let boostedVotePeriodLimit = document.getElementById("boostedVotePeriodLimit").value;
    let daoBountyConst = document.getElementById("daoBountyConst").value;
    let minimumDaoBounty = document.getElementById("minimumDaoBounty").value;
    let queuedVotePeriodLimit = document.getElementById("queuedVotePeriodLimit").value;
    let queuedVoteRequiredPercentage = document.getElementById("queuedVoteRequiredPercentage").value;
    let preBoostedVotePeriodLimit = document.getElementById("preBoostedVotePeriodLimit").value;
    let proposingRepReward = document.getElementById("proposingRepReward").value;
    let quietEndingPeriod = document.getElementById("quietEndingPeriod").value;
    let thresholdConst = document.getElementById("thresholdConst").value;
    let voteOnBehalf = document.getElementById("voteOnBehalf").value;
    let votersReputationLossRatio = document.getElementById("votersReputationLossRatio").value;
    let activationTime = document.getElementById("activationTime").value;
    const accounts = await window.ethereum.enable();
    const from = accounts[0];
    const gas = 2000000;
    const gasPrice = await web3.eth.getGasPrice();

    const genesisProtocolContract = new web3.eth.Contract(
      genesisProtocolJson.abi,
      votingMachine,
      {
        from,
        gas,
        gasPrice,
      }
    );
    const voteParams = {
      boostedVotePeriodLimit: boostedVotePeriodLimit,
      daoBountyConst: daoBountyConst,
      minimumDaoBounty: minimumDaoBounty,
      queuedVotePeriodLimit: queuedVotePeriodLimit,
      queuedVoteRequiredPercentage: queuedVoteRequiredPercentage,
      preBoostedVotePeriodLimit: preBoostedVotePeriodLimit,
      proposingRepReward: proposingRepReward,
      quietEndingPeriod: quietEndingPeriod,
      thresholdConst: thresholdConst,
      voteOnBehalf: voteOnBehalf,
      votersReputationLossRatio: votersReputationLossRatio,
      activationTime: activationTime,
    };

    const parameters = [
      [
        voteParams.queuedVoteRequiredPercentage.toString(),
        voteParams.queuedVotePeriodLimit.toString(),
        voteParams.boostedVotePeriodLimit.toString(),
        voteParams.preBoostedVotePeriodLimit.toString(),
        voteParams.thresholdConst.toString(),
        voteParams.quietEndingPeriod.toString(),
        web3.utils.toWei(voteParams.proposingRepReward.toString()),
        voteParams.votersReputationLossRatio.toString(),
        web3.utils.toWei(voteParams.minimumDaoBounty.toString()),
        voteParams.daoBountyConst.toString(),
        voteParams.activationTime.toString(),
      ],
      voteParams.voteOnBehalf,
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
      .initialize(daoAddress, votingMachine, votingParamHash, targetContract)
      .estimateGas();
    step3.classList.add("d-block");
    const gsInitialize = await genericScheme.methods
      .initialize(daoAddress, votingMachine, votingParamHash, targetContract)
      .send({ from, gas: estimate });
    step2.classList.add("d-block");
    step3.classList.add("d-block");
    step3.innerHTML = `GenericScheme Initialized and ready to be used at address: ${genericScheme.options.address}`;
  };
}
