import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import Seo from '../../../shared/layout-components/seo/seo';
import { Card, Col, Row } from 'react-bootstrap';
import {TreeView} from '@mui/x-tree-view/TreeView'; 

//Matterial ICONS
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {TreeItem} from '@mui/x-tree-view/TreeItem';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GmailTreeView from '../../../shared/data/advanceui/icon-treeview';

const TheeViews = () => {
  return (
    <>
        <Seo title="Tree View"/>
        <PageHeader title="Tree view" item="Advanced UI" active_item="Tree view"/>
         {/* <!-- container --> */}

      {/* <!-- row --> */}
      <Row>
        <Col md={12}>
          <Card className="mg-b-20">
            <Card.Body>
              <div className="main-content-label mg-b-5">
                Basic Treeview
              </div>
              <p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
              <Row>
                {/* <!-- col --> */}
                <Col lg={4} className="">
                  <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                  >
                    <TreeItem nodeId="1" label="TECH">
                      <TreeItem nodeId="2" label="Company Maintenance" />
                      <TreeItem nodeId="3" label="Employees">
                        <TreeItem nodeId="4" label="Reports" />
                      </TreeItem>
                      <TreeItem nodeId="5" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="6" label="XRP">
                      <TreeItem nodeId="7" label="Company Maintenance" />
                      <TreeItem nodeId="8" label="Employees">
                        <TreeItem nodeId="9" label="Reports" />
                      </TreeItem>
                      <TreeItem nodeId="10" label="Human Resources" />
                    </TreeItem>
                  </TreeView>
                </Col>
                {/* <!-- /col --> */}

                {/* <!-- col --> */}
                <Col lg={4} className="mt-4 mt-lg-0">
                  <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<RemoveCircleOutlineIcon />}
                    defaultExpandIcon={<AddCircleOutlineIcon />}
                  >
                    <TreeItem nodeId="1" label="TECH">
                      <TreeItem nodeId="2" label="Company Maintenance" />
                      <TreeItem nodeId="3" label="Employees">
                        <TreeItem nodeId="4" label="Reports" />
                      </TreeItem>
                      <TreeItem nodeId="5" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="6" label="XRP">
                      <TreeItem nodeId="7" label="Company Maintenance" />
                      <TreeItem nodeId="8" label="Employees">
                        <TreeItem nodeId="9" label="Reports" />
                      </TreeItem>
                      <TreeItem nodeId="10" label="Human Resources" />
                    </TreeItem>
                  </TreeView>
                </Col>
                {/* <!-- /col --> */}

                {/* <!-- col --> */}
                <Col lg={4} className="mt-4 mt-lg-0">
                  <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<FolderOpenIcon />}
                    defaultExpandIcon={<FolderOpenIcon />}
                  >
                    <TreeItem nodeId="1" label="TECH">
                      <TreeItem nodeId="2" label="Company Maintenance" />
                      <TreeItem nodeId="3" label="Employees">
                        <TreeItem nodeId="4" label="Reports" />
                      </TreeItem>
                      <TreeItem nodeId="5" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="6" label="XRP">
                      <TreeItem nodeId="7" label="Company Maintenance" />
                      <TreeItem nodeId="8" label="Employees">
                        <TreeItem nodeId="9" label="Reports" />
                      </TreeItem>
                      <TreeItem nodeId="10" label="Human Resources" />
                    </TreeItem>
                  </TreeView>
                </Col>
                {/* <!-- /col --> */}
              </Row>
            </Card.Body>
          </Card>
          <Row>
            <Col xl={8}>
              <Card className="mg-b-20">
                <Card.Body>
                  <div className="main-content-label mg-b-5">
                    Tree View Styles
                  </div>
                  <p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
                  <Row>
                    {/* <!-- col --> */}
                    <Col lg={4}>
                      <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<RemoveCircleOutlineIcon className='text-danger' />}
                        defaultExpandIcon={<AddCircleOutlineIcon className='text-primary' />}
                      >
                        <TreeItem nodeId="1" label="Treeview1">
                          <TreeItem nodeId="2" label="Company Maintenance" />
                          <TreeItem nodeId="3" label="Employees">
                            <TreeItem nodeId="4" label="Reports">
                              <TreeItem nodeId="5" label="Report1" />
                              <TreeItem nodeId="6" label="Report2" />
                              <TreeItem nodeId="7" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="8" label="Employee Maint.">
                              <TreeItem nodeId="9" label="Reports">
                                <TreeItem nodeId="10" label="Report1" />
                                <TreeItem nodeId="11" label="Report2" />
                                <TreeItem nodeId="12" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="13" label="Employee Maint." />
                              <TreeItem nodeId="14" label="Reports">
                                <TreeItem nodeId="15" label="Report1" />
                                <TreeItem nodeId="16" label="Report2" />
                                <TreeItem nodeId="17" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="18" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="19" label="Human Resources" />
                        </TreeItem>
                        <TreeItem nodeId="20" label="Treeview2">
                          <TreeItem nodeId="21" label="Company Maintenance" />
                          <TreeItem nodeId="22" label="Employees">
                            <TreeItem nodeId="23" label="Reports">
                              <TreeItem nodeId="24" label="Report1" />
                              <TreeItem nodeId="25" label="Report2" />
                              <TreeItem nodeId="26" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="27" label="Employee Maint.">
                              <TreeItem nodeId="28" label="Reports">
                                <TreeItem nodeId="29" label="Report1" />
                                <TreeItem nodeId="30" label="Report2" />
                                <TreeItem nodeId="31" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="32" label="Employee Maint." />
                              <TreeItem nodeId="33" label="Reports">
                                <TreeItem nodeId="34" label="Report1" />
                                <TreeItem nodeId="35" label="Report2" />
                                <TreeItem nodeId="36" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="37" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="38" label="Human Resources" />
                        </TreeItem>
                        <TreeItem nodeId="39" label="Treeview3">
                          <TreeItem nodeId="40" label="Company Maintenance" />
                          <TreeItem nodeId="41" label="Employees">
                            <TreeItem nodeId="42" label="Reports">
                              <TreeItem nodeId="43" label="Report1" />
                              <TreeItem nodeId="44" label="Report2" />
                              <TreeItem nodeId="45" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="46" label="Employee Maint.">
                              <TreeItem nodeId="47" label="Reports">
                                <TreeItem nodeId="48" label="Report1" />
                                <TreeItem nodeId="49" label="Report2" />
                                <TreeItem nodeId="50" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="51" label="Employee Maint." />
                              <TreeItem nodeId="52" label="Reports">
                                <TreeItem nodeId="53" label="Report1" />
                                <TreeItem nodeId="54" label="Report2" />
                                <TreeItem nodeId="55" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="56" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="57" label="Human Resources" />
                        </TreeItem>
                        <TreeItem nodeId="58" label="Treeview4">
                          <TreeItem nodeId="59" label="Company Maintenance" />
                          <TreeItem nodeId="60" label="Employees">
                            <TreeItem nodeId="61" label="Reports">
                              <TreeItem nodeId="62" label="Report1" />
                              <TreeItem nodeId="63" label="Report2" />
                              <TreeItem nodeId="64" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="65" label="Employee Maint.">
                              <TreeItem nodeId="66" label="Reports">
                                <TreeItem nodeId="67" label="Report1" />
                                <TreeItem nodeId="68" label="Report2" />
                                <TreeItem nodeId="69" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="70" label="Employee Maint." />
                              <TreeItem nodeId="71" label="Reports">
                                <TreeItem nodeId="72" label="Report1" />
                                <TreeItem nodeId="73" label="Report2" />
                                <TreeItem nodeId="74" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="75" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="76" label="Human Resources" />
                        </TreeItem>
                        <TreeItem nodeId="77" label="Treeview5">
                          <TreeItem nodeId="78" label="Company Maintenance" />
                          <TreeItem nodeId="79" label="Employees">
                            <TreeItem nodeId="80" label="Reports">
                              <TreeItem nodeId="81" label="Report1" />
                              <TreeItem nodeId="82" label="Report2" />
                              <TreeItem nodeId="83" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="84" label="Employee Maint.">
                              <TreeItem nodeId="85" label="Reports">
                                <TreeItem nodeId="86" label="Report1" />
                                <TreeItem nodeId="87" label="Report2" />
                                <TreeItem nodeId="88" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="89" label="Employee Maint." />
                              <TreeItem nodeId="90" label="Reports">
                                <TreeItem nodeId="91" label="Report1" />
                                <TreeItem nodeId="92" label="Report2" />
                                <TreeItem nodeId="93" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="94" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="95" label="Human Resources" />
                        </TreeItem>
                        <TreeItem nodeId="96" label="Treeview6">
                          <TreeItem nodeId="97" label="Company Maintenance" />
                          <TreeItem nodeId="98" label="Employees">
                            <TreeItem nodeId="99" label="Reports">
                              <TreeItem nodeId="100" label="Report1" />
                              <TreeItem nodeId="101" label="Report2" />
                              <TreeItem nodeId="102" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="103" label="Employee Maint.">
                              <TreeItem nodeId="104" label="Reports">
                                <TreeItem nodeId="105" label="Report1" />
                                <TreeItem nodeId="106" label="Report2" />
                                <TreeItem nodeId="107" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="108" label="Employee Maint." />
                              <TreeItem nodeId="109" label="Reports">
                                <TreeItem nodeId="110" label="Report1" />
                                <TreeItem nodeId="111" label="Report2" />
                                <TreeItem nodeId="112" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="113" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="114" label="Human Resources" />
                        </TreeItem>
                        <TreeItem nodeId="115" label="Treeview7">
                          <TreeItem nodeId="116" label="Company Maintenance" />
                          <TreeItem nodeId="117" label="Employees">
                            <TreeItem nodeId="118" label="Reports">
                              <TreeItem nodeId="119" label="Report1" />
                              <TreeItem nodeId="120" label="Report2" />
                              <TreeItem nodeId="121" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="122" label="Employee Maint.">
                              <TreeItem nodeId="123" label="Reports">
                                <TreeItem nodeId="124" label="Report1" />
                                <TreeItem nodeId="125" label="Report2" />
                                <TreeItem nodeId="126" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="127" label="Employee Maint." />
                              <TreeItem nodeId="128" label="Reports">
                                <TreeItem nodeId="129" label="Report1" />
                                <TreeItem nodeId="130" label="Report2" />
                                <TreeItem nodeId="131" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="132" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="133" label="Human Resources" />
                        </TreeItem>
                        <TreeItem nodeId="134" label="Treeview8">
                          <TreeItem nodeId="135" label="Company Maintenance" />
                          <TreeItem nodeId="136" label="Employees">
                            <TreeItem nodeId="137" label="Reports">
                              <TreeItem nodeId="138" label="Report1" />
                              <TreeItem nodeId="139" label="Report2" />
                              <TreeItem nodeId="140" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="141" label="Employee Maint.">
                              <TreeItem nodeId="142" label="Reports">
                                <TreeItem nodeId="143" label="Report1" />
                                <TreeItem nodeId="144" label="Report2" />
                                <TreeItem nodeId="145" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="146" label="Employee Maint." />
                              <TreeItem nodeId="147" label="Reports">
                                <TreeItem nodeId="148" label="Report1" />
                                <TreeItem nodeId="149" label="Report2" />
                                <TreeItem nodeId="150" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="151" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="152" label="Human Resources" />
                        </TreeItem>
                        <TreeItem nodeId="153" label="Treeview9">
                          <TreeItem nodeId="154" label="Company Maintenance" />
                          <TreeItem nodeId="155" label="Employees">
                            <TreeItem nodeId="156" label="Reports">
                              <TreeItem nodeId="157" label="Report1" />
                              <TreeItem nodeId="158" label="Report2" />
                              <TreeItem nodeId="159" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="160" label="Employee Maint.">
                              <TreeItem nodeId="161" label="Reports">
                                <TreeItem nodeId="162" label="Report1" />
                                <TreeItem nodeId="163" label="Report2" />
                                <TreeItem nodeId="164" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="165" label="Employee Maint." />
                              <TreeItem nodeId="166" label="Reports">
                                <TreeItem nodeId="167" label="Report1" />
                                <TreeItem nodeId="168" label="Report2" />
                                <TreeItem nodeId="169" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="170" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="171" label="Human Resources" />
                        </TreeItem>
                        <TreeItem nodeId="172" label="Treeview10">
                          <TreeItem nodeId="173" label="Company Maintenance" />
                          <TreeItem nodeId="174" label="Employees">
                            <TreeItem nodeId="175" label="Reports">
                              <TreeItem nodeId="176" label="Report1" />
                              <TreeItem nodeId="177" label="Report2" />
                              <TreeItem nodeId="178" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="179" label="Employee Maint.">
                              <TreeItem nodeId="180" label="Reports">
                                <TreeItem nodeId="181" label="Report1" />
                                <TreeItem nodeId="182" label="Report2" />
                                <TreeItem nodeId="183" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="184" label="Employee Maint." />
                              <TreeItem nodeId="185" label="Reports">
                                <TreeItem nodeId="186" label="Report1" />
                                <TreeItem nodeId="187" label="Report2" />
                                <TreeItem nodeId="188" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="189" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="190" label="Human Resources" />
                        </TreeItem>
                        <TreeItem nodeId="191" label="Treeview11">
                          <TreeItem nodeId="192" label="Company Maintenance" />
                          <TreeItem nodeId="193" label="Employees">
                            <TreeItem nodeId="194" label="Reports">
                              <TreeItem nodeId="195" label="Report1" />
                              <TreeItem nodeId="196" label="Report2" />
                              <TreeItem nodeId="197" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="198" label="Employee Maint.">
                              <TreeItem nodeId="199" label="Reports">
                                <TreeItem nodeId="200" label="Report1" />
                                <TreeItem nodeId="201" label="Report2" />
                                <TreeItem nodeId="202" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="203" label="Employee Maint." />
                              <TreeItem nodeId="204" label="Reports">
                                <TreeItem nodeId="205" label="Report1" />
                                <TreeItem nodeId="206" label="Report2" />
                                <TreeItem nodeId="207" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="208" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="209" label="Human Resources" />
                        </TreeItem>
                      </TreeView>
                    </Col>
                    {/* <!-- /col --> */}

                    {/* <!-- col --> */}
                    <Col lg={4} className="mt-4 mt-lg-0">
                      <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<RemoveCircleOutlineIcon className='text-danger' />}
                        defaultExpandIcon={<AddCircleOutlineIcon className='text-primary' />}
                      >
                        <TreeItem nodeId="1" label="Treeview1">
                          <TreeItem nodeId="2" label="Company Maintenance" className='text-warning' />
                          <TreeItem nodeId="3" label="Employees" className='text-pink'>
                            <TreeItem nodeId="4" label="Reports">
                              <TreeItem nodeId="5" label="Report1" className='text-success' />
                              <TreeItem nodeId="6" label="Report2" className='text-success' />
                              <TreeItem nodeId="7" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem nodeId="8" label="Employee Maint.">
                              <TreeItem nodeId="9" label="Reports">
                                <TreeItem nodeId="10" label="Report1" className='text-success' />
                                <TreeItem nodeId="11" label="Report2" className='text-success' />
                                <TreeItem nodeId="12" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="13" label="Employee Maint." className='text-warning' />
                              <TreeItem nodeId="14" label="Reports">
                                <TreeItem nodeId="15" label="Report1" className='text-success' />
                                <TreeItem nodeId="16" label="Report2" className='text-success' />
                                <TreeItem nodeId="17" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="18" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="19" label="Human Resources" className='text-warning' />
                        </TreeItem>
                        <TreeItem nodeId="20" label="Treeview1">
                          <TreeItem nodeId="21" label="Company Maintenance" className='text-warning' />
                          <TreeItem nodeId="22" label="Employees" className='text-pink'>
                            <TreeItem nodeId="23" label="Reports">
                              <TreeItem nodeId="24" label="Report1" className='text-success' />
                              <TreeItem nodeId="25" label="Report2" className='text-success' />
                              <TreeItem nodeId="26" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem nodeId="27" label="Employee Maint.">
                              <TreeItem nodeId="28" label="Reports">
                                <TreeItem nodeId="29" label="Report1" className='text-success' />
                                <TreeItem nodeId="30" label="Report2" className='text-success' />
                                <TreeItem nodeId="31" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="32" label="Employee Maint." className='text-warning' />
                              <TreeItem nodeId="33" label="Reports">
                                <TreeItem nodeId="34" label="Report1" className='text-success' />
                                <TreeItem nodeId="35" label="Report2" className='text-success' />
                                <TreeItem nodeId="36" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="37" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="38" label="Human Resources" className='text-warning' />
                        </TreeItem>
                        <TreeItem nodeId="39" label="Treeview1">
                          <TreeItem nodeId="40" label="Company Maintenance" className='text-warning' />
                          <TreeItem nodeId="41" label="Employees" className='text-pink'>
                            <TreeItem nodeId="42" label="Reports">
                              <TreeItem nodeId="43" label="Report1" className='text-success' />
                              <TreeItem nodeId="44" label="Report2" className='text-success' />
                              <TreeItem nodeId="45" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem nodeId="46" label="Employee Maint.">
                              <TreeItem nodeId="47" label="Reports">
                                <TreeItem nodeId="48" label="Report1" className='text-success' />
                                <TreeItem nodeId="49" label="Report2" className='text-success' />
                                <TreeItem nodeId="50" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="51" label="Employee Maint." className='text-warning' />
                              <TreeItem nodeId="52" label="Reports">
                                <TreeItem nodeId="53" label="Report1" className='text-success' />
                                <TreeItem nodeId="54" label="Report2" className='text-success' />
                                <TreeItem nodeId="55" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="56" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="57" label="Human Resources" className='text-warning' />
                        </TreeItem>
                        <TreeItem nodeId="58" label="Treeview1">
                          <TreeItem nodeId="59" label="Company Maintenance" className='text-warning' />
                          <TreeItem nodeId="60" label="Employees" className='text-pink'>
                            <TreeItem nodeId="61" label="Reports">
                              <TreeItem nodeId="62" label="Report1" className='text-success' />
                              <TreeItem nodeId="63" label="Report2" className='text-success' />
                              <TreeItem nodeId="64" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem nodeId="65" label="Employee Maint.">
                              <TreeItem nodeId="66" label="Reports">
                                <TreeItem nodeId="67" label="Report1" className='text-success' />
                                <TreeItem nodeId="68" label="Report2" className='text-success' />
                                <TreeItem nodeId="69" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="70" label="Employee Maint." className='text-warning' />
                              <TreeItem nodeId="71" label="Reports">
                                <TreeItem nodeId="72" label="Report1" className='text-success' />
                                <TreeItem nodeId="73" label="Report2" className='text-success' />
                                <TreeItem nodeId="74" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="75" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="76" label="Human Resources" className='text-warning' />
                        </TreeItem>
                        <TreeItem nodeId="77" label="Treeview1">
                          <TreeItem nodeId="78" label="Company Maintenance" className='text-warning' />
                          <TreeItem nodeId="79" label="Employees" className='text-pink'>
                            <TreeItem nodeId="80" label="Reports">
                              <TreeItem nodeId="81" label="Report1" className='text-success' />
                              <TreeItem nodeId="82" label="Report2" className='text-success' />
                              <TreeItem nodeId="83" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem nodeId="84" label="Employee Maint.">
                              <TreeItem nodeId="85" label="Reports">
                                <TreeItem nodeId="86" label="Report1" className='text-success' />
                                <TreeItem nodeId="87" label="Report2" className='text-success' />
                                <TreeItem nodeId="88" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="89" label="Employee Maint." className='text-warning' />
                              <TreeItem nodeId="90" label="Reports">
                                <TreeItem nodeId="91" label="Report1" className='text-success' />
                                <TreeItem nodeId="92" label="Report2" className='text-success' />
                                <TreeItem nodeId="93" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="94" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="95" label="Human Resources" className='text-warning' />
                        </TreeItem>
                        <TreeItem nodeId="96" label="Treeview1">
                          <TreeItem nodeId="97" label="Company Maintenance" className='text-warning' />
                          <TreeItem nodeId="98" label="Employees" className='text-pink'>
                            <TreeItem nodeId="99" label="Reports">
                              <TreeItem nodeId="100" label="Report1" className='text-success' />
                              <TreeItem nodeId="101" label="Report2" className='text-success' />
                              <TreeItem nodeId="102" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem nodeId="103" label="Employee Maint.">
                              <TreeItem nodeId="104" label="Reports">
                                <TreeItem nodeId="105" label="Report1" className='text-success' />
                                <TreeItem nodeId="106" label="Report2" className='text-success' />
                                <TreeItem nodeId="107" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="108" label="Employee Maint." className='text-warning' />
                              <TreeItem nodeId="109" label="Reports">
                                <TreeItem nodeId="110" label="Report1" className='text-success' />
                                <TreeItem nodeId="111" label="Report2" className='text-success' />
                                <TreeItem nodeId="112" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="113" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="114" label="Human Resources" className='text-warning' />
                        </TreeItem>
                      </TreeView>
                    </Col>
                    {/* <!-- /col --> */}
                  </Row>
                  {/* <!-- col --> */}
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4}>
              <Card className="mg-b-20 tree-view-styles">
                <Card.Body>
                  <div className="main-content-label mg-b-5">
                  Custom icons Tree View Styles 
                  </div>
                  <p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
                  <Row>
                    {/* <!-- col --> */}
                    <Col lg={12} className="mt-4 mt-lg-0">
                    <GmailTreeView/>
                    </Col>
                    {/* <!-- /col --> */}
                  </Row>
                  {/* <!-- col --> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

      </Row>
      {/* <!-- row --> */}

      {/* <!-- Container closed --> */}
    </>
  )
}
TheeViews.layout = "Contentlayout"

export default TheeViews