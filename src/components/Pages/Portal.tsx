/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PrintOrder } from '../../types';
import { MOCK_ORDERS, CORPORATE_CLIENTS } from '../../data';
import {
  ShieldAlert,
  ClipboardList,
  User,
  Activity,
  CheckCircle2,
  Lock,
  ArrowRight,
  TrendingUp,
  Settings,
  Download,
  CheckCircle,
  FileText,
  Building,
  DollarSign
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PortalProps {
  ordersList: PrintOrder[];
  updateOrderStatus: (orderId: string, status: PrintOrder['status']) => void;
}

export default function Portal({ ordersList, updateOrderStatus }: PortalProps) {
  const [userRole, setUserRole] = useState<'guest' | 'customer' | 'admin'>('guest');
  const [customerEmail, setCustomerEmail] = useState('');
  const [activeCustomer, setActiveCustomer] = useState<typeof CORPORATE_CLIENTS[0] | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  
  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };
  
  // Invoice state
  const [selectedInvoiceOrder, setSelectedInvoiceOrder] = useState<PrintOrder | null>(null);
  
  // Track order by custom input ID
  const [trackInputId, setTrackInputId] = useState('');
  const [trackedOrderResult, setTrackedOrderResult] = useState<PrintOrder | null>(null);

  // Administrative login
  const [adminPass, setAdminPass] = useState('');
  const [adminError, setAdminError] = useState(false);

  // Stats
  const activeQueues = ordersList.filter((o) => o.status !== 'Delivered').length;
  const completedVolume = ordersList.filter((o) => o.status === 'Delivered').length;
  const grossRevenue = ordersList.reduce((acc, o) => acc + o.totalCost, 0);

  const handleCustomerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const match = CORPORATE_CLIENTS.find((c) => c.email.toLowerCase() === customerEmail.trim().toLowerCase());
    if (match) {
      setActiveCustomer(match);
      setUserRole('customer');
      setCustomerEmail('');
    } else {
      // Create guest profile
      const guestObj = { email: customerEmail, name: customerEmail.split('@')[0], company: 'Independent Partner', phone: '+91 99999 88888' };
      setActiveCustomer(guestObj);
      setUserRole('customer');
      setCustomerEmail('');
    }
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPass === 'admin') {
      setUserRole('admin');
      setAdminPass('');
      setAdminError(false);
    } else {
      setAdminError(true);
    }
  };

  const handleTrackById = (e: React.FormEvent) => {
    e.preventDefault();
    const match = ordersList.find((o) => o.id.toUpperCase() === trackInputId.trim().toUpperCase());
    if (match) {
      setTrackedOrderResult(match);
    } else {
      setTrackedOrderResult(null);
    }
  };

  const getCustomerOrders = () => {
    if (!activeCustomer) return [];
    return ordersList.filter((o) => o.customerName.toLowerCase() === activeCustomer.name.toLowerCase() || o.id === 'AXO-8472');
  };

  const statusStages: PrintOrder['status'][] = ['Received', 'Proof Approved', 'In Production', 'Dispatched', 'Delivered'];

  const getStatusStageIndex = (status: PrintOrder['status']) => {
    return statusStages.indexOf(status);
  };

  return (
    <div className="space-y-12 pb-16 pt-4">
      
      {/* 1. PORTAL ROLES SWAPPER */}
      <section id="portal-landing-selector" className="max-w-4xl mx-auto px-4">
        {userRole === 'guest' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Left: Customer/Corporate Portal */}
            <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 p-8 rounded-[32px] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <div className="p-3 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl w-fit">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Corporate Customer Desk</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Log in with your corporate email to track active proofs, download tax invoices, and authorize print runs.
                </p>
                <div className="pt-2 bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-900">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Pre-seeded Mock Account:</p>
                  <p className="text-[11px] font-mono text-slate-600 dark:text-slate-300 mt-1">vikram@spicebistro.in</p>
                </div>
              </div>

              <form onSubmit={handleCustomerLogin} className="space-y-3">
                <input
                  id="customer-email-login"
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="Enter corporate email..."
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                  required
                />
                <button
                  id="customer-login-btn"
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-500/15 flex items-center justify-center gap-1"
                >
                  <span>Access Client Board</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            {/* Right: Administrator/Management Control */}
            <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 p-8 rounded-[32px] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <div className="p-3 bg-slate-150 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl w-fit">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Press Operations Board</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Administrative dashboard for print supervisors. Authorize proof uploads and update order progress pipelines.
                </p>
                <div className="pt-2 bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-900">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Mock Admin Password:</p>
                  <p className="text-[11px] font-mono text-slate-600 dark:text-slate-300 mt-1">admin</p>
                </div>
              </div>

              <form onSubmit={handleAdminLogin} className="space-y-3">
                <input
                  id="admin-password-login"
                  type="password"
                  value={adminPass}
                  onChange={(e) => setAdminPass(e.target.value)}
                  placeholder="Enter administrative code..."
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                  required
                />
                {adminError && <p className="text-red-500 text-[10px]">Incorrect admin code. Use 'admin'.</p>}
                <button
                  id="admin-login-btn"
                  type="submit"
                  className="w-full py-2.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-lg flex items-center justify-center gap-1"
                >
                  <span>Authenticate Operator</span>
                  <Lock className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

          </div>
        )}
      </section>

      {/* 2. CUSTOMER PORTAL VIEW */}
      <AnimatePresence mode="wait">
        {userRole === 'customer' && activeCustomer && (
          <motion.div
            key="customer-dashboard"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left"
          >
            {/* Header / Logout bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-5 gap-4">
              <div className="space-y-1">
                <span className="text-[10px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest block">Corporate Account Board</span>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">Welcome back, {activeCustomer.name}</h2>
                <p className="text-xs text-slate-400">{activeCustomer.company} | {activeCustomer.phone}</p>
              </div>
              <button
                id="portal-logout-btn"
                onClick={() => {
                  setUserRole('guest');
                  setActiveCustomer(null);
                  setTrackedOrderResult(null);
                }}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-950 hover:text-red-600 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-xl transition-all"
              >
                Sign Out / Exit
              </button>
            </div>

            {/* QUICK ORDER TRACKER FIELD */}
            <div className="bg-slate-50 dark:bg-slate-900/40 p-6 rounded-[28px] border border-slate-200/50 dark:border-slate-800 flex flex-col md:flex-row items-center gap-6">
              <div className="text-left space-y-1 shrink-0">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">Direct Order Tracker</h3>
                <p className="text-slate-400 text-[11px]">Enter any AXO receipt ID to track custom stages.</p>
              </div>
              <form onSubmit={handleTrackById} className="flex-1 flex gap-2 w-full">
                <input
                  id="direct-track-input"
                  type="text"
                  placeholder="e.g. AXO-8472..."
                  value={trackInputId}
                  onChange={(e) => setTrackInputId(e.target.value)}
                  className="px-4 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 w-full"
                  required
                />
                <button
                  id="direct-track-btn"
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-lg shrink-0"
                >
                  Track ID
                </button>
              </form>
            </div>

            {/* TRACKING TIMELINE DISPLAY */}
            {trackedOrderResult && (
              <div className="bg-white dark:bg-slate-900 p-6 rounded-[28px] border border-blue-100 dark:border-blue-900 shadow-sm space-y-6">
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase">Live Tracking Details</h4>
                    <p className="text-sm font-extrabold text-slate-900 dark:text-white">{trackedOrderResult.productName} ({trackedOrderResult.id})</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">Est. Dispatch: {trackedOrderResult.estimatedDelivery}</span>
                </div>

                {/* Stages line */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4">
                  {statusStages.map((stage, idx) => {
                    const currentIdx = getStatusStageIndex(trackedOrderResult.status);
                    const isDone = idx <= currentIdx;
                    return (
                      <div key={stage} className="text-center space-y-2 relative">
                        <div className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${
                          isDone
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                        }`}>
                          {idx + 1}
                        </div>
                        <h5 className={`text-[11px] font-bold ${isDone ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`}>
                          {stage}
                        </h5>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Active and Historic Orders List */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Your Order Logs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getCustomerOrders().map((order) => (
                  <div
                    key={order.id}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800/80 rounded-2xl flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-black text-blue-600 dark:text-blue-400">{order.id}</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          order.status === 'Delivered'
                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
                            : 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white mt-2">{order.productName}</h4>
                      <div className="text-[11px] text-slate-400 mt-2 space-y-1">
                        <p><span className="font-bold text-slate-500">GSM Material:</span> {order.paperType}</p>
                        <p><span className="font-bold text-slate-500">Finishing:</span> {order.finishing}</p>
                        <p><span className="font-bold text-slate-500">File attached:</span> {order.fileName}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                      <span className="text-sm font-black text-slate-900 dark:text-white">₹{order.totalCost}</span>
                      <button
                        id={`invoice-btn-${order.id}`}
                        onClick={() => setSelectedInvoiceOrder(order)}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-[11px] font-bold rounded-lg flex items-center gap-1.5"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Invoice</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. ADMINISTRATOR OPERATIONS VIEW */}
      <AnimatePresence mode="wait">
        {userRole === 'admin' && (
          <motion.div
            key="admin-dashboard-panel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left"
          >
            {/* Admin Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-5 gap-4">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Operator Dashboard</span>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">Press Operations & Control Room</h2>
                <p className="text-xs text-slate-400">Logged in as: Guindy Production Supervisor</p>
              </div>
              <button
                id="admin-logout-btn"
                onClick={() => setUserRole('guest')}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-950 hover:text-red-600 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-xl transition-all"
              >
                Log Out Operator
              </button>
            </div>

            {/* HIGH FIDELITY CSS/SVG CHARTS & STATS PANEL */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stat Card 1 */}
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-800/80 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Active Print Queues</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">{activeQueues} orders</span>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-800/80 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Completed Dispatches</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">{completedVolume} orders</span>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-800/80 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-xl">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Active Revenue Pipeline</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">₹{grossRevenue}</span>
                </div>
              </div>
            </div>

            {/* VISUAL REPORT CHARTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Revenue breakdown purely styled in CSS bar charts */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-[28px] border border-slate-150 dark:border-slate-800/80 space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Weekly Print Production Yield</h4>
                
                <div className="space-y-3 pt-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Mon (Offset)</span>
                      <span>84% Capacity</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: '84%' }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Tue (Offset)</span>
                      <span>92% Capacity</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Wed (Packaging rigid boxes)</span>
                      <span>68% Capacity</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: '68%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Modifier controls */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-[28px] border border-slate-150 dark:border-slate-800/80 space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Live Pricing Modifiers</h4>
                <div className="text-xs text-slate-500 space-y-3">
                  <p>Adust raw multiplier parameters for the live bulk calculator client-side.</p>
                  
                  <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                    <span>Base Paper Markup (350 GSM Velvet):</span>
                    <span className="font-extrabold text-blue-600 dark:text-blue-400">1.3x markup</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                    <span>Raised Spot UV Lamination Markup:</span>
                    <span className="font-extrabold text-blue-600 dark:text-blue-400">₹0.60 per unit</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Standard Central IGST duty:</span>
                    <span className="font-extrabold text-emerald-500">18.00% fixed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTROL PIPELINE ORDERS TABLE */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-[28px] border border-slate-150 dark:border-slate-800/80 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Authorize & Move Active Print Pipeline</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                      <th className="py-3 px-4">Order ID</th>
                      <th className="py-3 px-4">Product Name</th>
                      <th className="py-3 px-4">Client Name</th>
                      <th className="py-3 px-4">Billing Cost</th>
                      <th className="py-3 px-4">Authorized Status</th>
                      <th className="py-3 px-4 text-right">Pipelines Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersList.map((order) => (
                      <tr key={order.id} className="border-b border-slate-100 dark:border-slate-850 hover:bg-slate-50/50 dark:hover:bg-slate-950/40">
                        <td className="py-4 px-4 font-black text-blue-600 dark:text-blue-400">{order.id}</td>
                        <td className="py-4 px-4 font-bold text-slate-900 dark:text-white">{order.productName}</td>
                        <td className="py-4 px-4">{order.customerName}</td>
                        <td className="py-4 px-4 font-extrabold">₹{order.totalCost}</td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            order.status === 'Delivered'
                              ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
                              : 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <select
                            value={order.status}
                            onChange={(e) => updateOrderStatus(order.id, e.target.value as PrintOrder['status'])}
                            className="px-2 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-lg text-[10px] font-bold focus:outline-none"
                          >
                            {statusStages.map((st) => (
                              <option key={st} value={st}>{st}</option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. IMMERSIVE CUSTOM INVOICE OVERLAY */}
      <AnimatePresence>
        {selectedInvoiceOrder && (
          <motion.div
            id="invoice-receipt-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white text-slate-800 p-6 sm:p-8 rounded-[32px] max-w-lg w-full border border-slate-200 shadow-2xl relative space-y-6 text-left"
            >
              {/* Close invoice */}
              <button
                id="close-invoice-btn"
                onClick={() => setSelectedInvoiceOrder(null)}
                className="absolute top-4 right-4 p-2 bg-slate-150 hover:bg-slate-200 rounded-full text-slate-600"
                aria-label="Close invoice"
              >
                <XIcon />
              </button>

              {/* Branding header */}
              <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-xl font-black tracking-tight text-slate-900">
                    Axo<span className="text-blue-600">Print</span>
                  </h3>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Guindy Industrial Plant, Chennai</p>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md font-bold uppercase">
                    Tax Invoice
                  </span>
                  <p className="text-[10px] text-slate-400 mt-1">Receipt ID: {selectedInvoiceOrder.id}</p>
                </div>
              </div>

              {/* Customer and Seller blocks */}
              <div className="grid grid-cols-2 gap-4 text-[11px] text-slate-500">
                <div>
                  <h4 className="font-bold text-slate-700 uppercase tracking-wide text-[9px]">Shipped To:</h4>
                  <p className="font-extrabold text-slate-850 mt-1">{selectedInvoiceOrder.customerName}</p>
                  <p className="mt-0.5 truncate max-w-[150px]">Corporate Client</p>
                  <p className="mt-0.5 font-semibold">Tamil Nadu, IN</p>
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-slate-700 uppercase tracking-wide text-[9px]">Billed From:</h4>
                  <p className="font-extrabold text-slate-850 mt-1">AxoPrint Press Ltd</p>
                  <p className="mt-0.5 text-slate-400">GSTIN: 33AAICA2026M1Z2</p>
                  <p className="mt-0.5 font-semibold">Chennai Guindy Zone, TN</p>
                </div>
              </div>

              {/* Itemized table */}
              <div className="border-t border-b border-slate-100 py-3 text-[11px]">
                <div className="flex justify-between font-bold text-slate-400 uppercase tracking-wider pb-2">
                  <span>Description</span>
                  <span>Yield Details</span>
                  <span className="text-right">Cost</span>
                </div>
                <div className="flex justify-between py-2 text-slate-800 font-semibold border-t border-slate-50">
                  <span>{selectedInvoiceOrder.productName}</span>
                  <span>{selectedInvoiceOrder.quantity} Units</span>
                  <span className="text-right">₹{Math.ceil(selectedInvoiceOrder.totalCost / 1.18)}</span>
                </div>
              </div>

              {/* GST and totals block */}
              <div className="text-xs text-slate-500 space-y-2 text-right max-w-xs ml-auto">
                <div className="flex justify-between">
                  <span>Net Print Base Cost:</span>
                  <span className="font-semibold text-slate-800">₹{Math.ceil(selectedInvoiceOrder.totalCost / 1.18)}</span>
                </div>
                <div className="flex justify-between">
                  <span>IGST / CGST Duty (18.0%):</span>
                  <span className="font-semibold text-slate-800">₹{selectedInvoiceOrder.totalCost - Math.ceil(selectedInvoiceOrder.totalCost / 1.18)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200 text-sm">
                  <span className="font-black text-slate-900">Total Billed Amt:</span>
                  <span className="font-black text-blue-600">₹{selectedInvoiceOrder.totalCost}</span>
                </div>
              </div>

              {/* Downloader trigger */}
              <div className="pt-4 border-t border-slate-100 flex gap-3">
                <button
                  id="print-invoice-action"
                  onClick={() => window.print()}
                  className="flex-1 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl text-center"
                >
                  Print Sheet
                </button>
                <button
                  id="download-invoice-action"
                  onClick={() => {
                    triggerToast('Invoice packed as PDF/CSV successfully! Saved to downloads.');
                  }}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/15"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating UI Toast Banner */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-800"
          >
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs font-bold tracking-tight">{toastMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// Compact Close Icon representation to avoid duplication issues
function XIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
