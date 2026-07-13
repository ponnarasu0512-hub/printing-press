/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { UploadCloud, File, Trash2, CheckCircle, Receipt, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PrintOrder } from '../../types';

interface BulkOrderProps {
  preselectedProduct: string;
  addMockOrder: (order: PrintOrder) => void;
  setActiveTab: (tab: string) => void;
}

export default function BulkOrder({ preselectedProduct, addMockOrder, setActiveTab }: BulkOrderProps) {
  // Input states
  const [product, setProduct] = useState(preselectedProduct || 'Premium Business Cards');
  const [quantity, setQuantity] = useState(500);
  const [paperType, setPaperType] = useState('350 GSM Premium Velvet Board');
  const [size, setSize] = useState('Standard (3.5" x 2.0")');
  const [finishing, setFinishing] = useState('Soft Touch Velvet + Spot UV');
  const [stateDelivery, setStateDelivery] = useState('Tamil Nadu');
  const [address, setAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  
  // File Upload states
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string } | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // Submission state
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedProduct) {
      setProduct(preselectedProduct);
    }
  }, [preselectedProduct]);

  // Pricing constants (realistic Indian print metrics)
  const baseRates: Record<string, number> = {
    'Premium Business Cards': 0.8,
    'Corporate Letterheads': 2.2,
    'High-Definition Flex Printing': 15.0, // sq ft
    'Custom Product Packaging': 12.0,
    'Eco-Friendly Paper Bags': 8.5,
    'Roll-up Standees': 450.0,
    'Bespoke Invitation Cards': 35.0,
    'Corporate Gifts & Apparels': 180.0,
    'Brochures & Catalogues': 14.0,
    'Die-cut Labels & Stickers': 0.4
  };

  const paperMultipliers: Record<string, number> = {
    '300 GSM Hard Board': 1.0,
    '350 GSM Premium Velvet Board': 1.3,
    '100 GSM Alabaster Bond': 0.9,
    '150 GSM Unbleached Kraft': 0.8,
    'Heavy Star Flex Cloth': 1.2,
    'Satin Satin Banner Media': 1.4
  };

  const finishingRates: Record<string, number> = {
    'None / Raw Matte': 0,
    'Standard Matte Lamination': 0.2,
    'Soft Touch Velvet + Spot UV': 0.6,
    'Gold Metallic Foil Stamp': 0.8
  };

  // Live calculation
  const subtotal = Math.ceil(
    (baseRates[product] || 1.0) *
      quantity *
      (paperMultipliers[paperType] || 1.0) +
      quantity * (finishingRates[finishing] || 0)
  );

  const gst = Math.ceil(subtotal * 0.18); // 18% GST standard print tax
  const deliveryCost = subtotal > 5000 ? 0 : 250;
  const grandTotal = subtotal + gst + deliveryCost;

  // Drag and Drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const simulateUpload = (fileName: string, fileSize: number) => {
    setIsUploading(true);
    setUploadProgress(0);
    const sizeStr = (fileSize / (1024 * 1024)).toFixed(2) + ' MB';
    
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadedFile({ name: fileName, size: sizeStr });
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      simulateUpload(file.name, file.size);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      simulateUpload(file.name, file.size);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setUploadProgress(0);
  };

  // Form Submission
  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderId = 'AXO-' + Math.floor(1000 + Math.random() * 9000);
    
    const newOrder: PrintOrder = {
      id: orderId,
      customerName: 'Guest Client',
      productName: product,
      quantity,
      paperType,
      size,
      finishing,
      status: 'Received',
      date: new Date().toISOString().split('T')[0],
      totalCost: grandTotal,
      estimatedDelivery: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      fileName: uploadedFile?.name || 'vector-draft.pdf',
      specialInstructions: specialInstructions
    };

    addMockOrder(newOrder);
    setOrderSuccess(orderId);
  };

  const handleResetForm = () => {
    setOrderSuccess(null);
    setAddress('');
    setSpecialInstructions('');
    setUploadedFile(null);
  };

  return (
    <div className="space-y-12 pb-16 pt-4">
      {/* Header */}
      <div id="bulk-header" className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 rounded-full">
          Live Quote Configurator
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Custom Bulk Calculator
        </h1>
        <p className="text-slate-500 text-sm">
          Run high-precision estimations matching active Indian paper sheets. Change parameters to see real-time updates instantly.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!orderSuccess ? (
          <motion.div
            key="order-form-panel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            id="bulk-order-grid"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* PARAMETERS CONFIGURATOR (Col Span 7) */}
            <form
              id="bulk-quote-form"
              onSubmit={handleSubmitOrder}
              className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[32px] border border-slate-100 dark:border-slate-800/60 shadow-sm space-y-6 text-left"
            >
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Configure Raw Print Parameters</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Select Product */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Target Product</label>
                  <select
                    id="bulk-product-select"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                  >
                    {Object.keys(baseRates).map((name) => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                </div>

                {/* Print Quantity */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Bulk Quantity</label>
                  <input
                    id="bulk-quantity-input"
                    type="number"
                    min="100"
                    max="100000"
                    step="50"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 font-bold"
                    required
                  />
                </div>

                {/* Paper Stock GSM */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Paper/Media Stock</label>
                  <select
                    id="bulk-paper-select"
                    value={paperType}
                    onChange={(e) => setPaperType(e.target.value)}
                    className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                  >
                    {Object.keys(paperMultipliers).map((name) => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                </div>

                {/* Die-cut size */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Print Dimensions</label>
                  <select
                    id="bulk-size-select"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                  >
                    <option value="Standard (3.5&quot; x 2.0&quot;)">Standard Visiting Cards (3.5" x 2.0")</option>
                    <option value="A5 Standard Size">A5 Standard Pamphlet Size</option>
                    <option value="A4 Standard Size">A4 Corporate Letterhead Size</option>
                    <option value="6ft x 3ft Banner Size">Standard 6ft x 3ft Banner size</option>
                    <option value="Custom Box Die-Line">Custom Structured Box Die-Cut</option>
                  </select>
                </div>

                {/* Coatings/Finishing */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Coating & Finish</label>
                  <select
                    id="bulk-finish-select"
                    value={finishing}
                    onChange={(e) => setFinishing(e.target.value)}
                    className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                  >
                    {Object.keys(finishingRates).map((name) => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                </div>

                {/* Delivery State */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Delivery State (India)</label>
                  <select
                    id="bulk-state-select"
                    value={stateDelivery}
                    onChange={(e) => setStateDelivery(e.target.value)}
                    className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                  >
                    <option value="Tamil Nadu">Tamil Nadu (Base Plant)</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Gujarat">Gujarat</option>
                  </select>
                </div>
              </div>

              {/* Special Instructions */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Special Production Notes</label>
                <textarea
                  id="bulk-instructions-textarea"
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="e.g. Ensure fold margins are exact. Print back-side in light grey. Need dual scoring handles..."
                  className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 h-20 resize-none"
                />
              </div>

              {/* Delivery Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Courier Shipping Address</label>
                <input
                  id="bulk-address-input"
                  type="text"
                  placeholder="Enter full physical address with pincode..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              {/* VECTOR FILE UPLOAD SECTION */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Upload Print-Ready File (.PDF, .AI, .CDR)</label>
                
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all ${
                    dragActive
                      ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/20'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <input
                    id="file-upload-input"
                    type="file"
                    className="hidden"
                    accept=".pdf,.ai,.eps,.cdr,.png"
                    onChange={handleFileChange}
                  />
                  
                  {!uploadedFile && !isUploading && (
                    <label htmlFor="file-upload-input" className="cursor-pointer space-y-2 block">
                      <UploadCloud className="w-8 h-8 text-slate-400 mx-auto" />
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Drag files here or <span className="text-blue-600 dark:text-blue-400">click to browse</span></p>
                      <p className="text-[10px] text-slate-400">Vector high-res PDF or Adobe Illustrator templates preferred (Max 15MB)</p>
                    </label>
                  )}

                  {isUploading && (
                    <div className="space-y-3">
                      <p className="text-xs text-slate-500 font-semibold animate-pulse">Uploading and auditing layouts...</p>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full transition-all duration-150" style={{ width: `${uploadProgress}%` }} />
                      </div>
                      <span className="text-[10px] text-slate-400">{uploadProgress}% Complete</span>
                    </div>
                  )}

                  {uploadedFile && (
                    <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900 rounded-xl">
                      <div className="flex items-center gap-2.5 text-left">
                        <div className="p-2 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-lg">
                          <File className="w-4 h-4" />
                        </div>
                        <div className="max-w-[200px] sm:max-w-xs overflow-hidden">
                          <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">{uploadedFile.name}</p>
                          <span className="text-[10px] text-slate-400">{uploadedFile.size}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="p-1.5 hover:bg-red-50 text-red-500 rounded-lg transition-colors"
                        aria-label="Remove uploaded file"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  id="submit-order-form-btn"
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-xl shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Order Blueprint & Approve Proof</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>

            {/* LIVE ESTIMATION BREAKDOWN (Col Span 5) */}
            <aside
              id="bulk-order-summary"
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-slate-50 text-slate-800 p-6 sm:p-8 rounded-[32px] shadow-md border border-slate-200 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
                
                <h3 className="text-base font-extrabold text-slate-900 border-b border-slate-200 pb-4 flex items-center gap-2 relative z-10">
                  <Receipt className="w-5 h-5 text-blue-600" />
                  <span>Interactive Print Estimation</span>
                </h3>

                <div className="space-y-4 pt-4 relative z-10 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Base Print Cost ({product}):</span>
                    <span className="font-semibold text-slate-900">₹{baseRates[product]} / unit</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Paper/Media Modifier ({paperType}):</span>
                    <span className="font-semibold text-slate-900">x {paperMultipliers[paperType]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Finishing Coat Premium ({finishing}):</span>
                    <span className="font-semibold text-slate-900">₹{finishingRates[finishing]} / unit</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Configured Print Quantity:</span>
                    <span className="font-extrabold text-slate-900">{quantity} units</span>
                  </div>

                  <div className="h-px bg-slate-200 my-4" />

                  <div className="flex justify-between">
                    <span>Material Subtotal:</span>
                    <span className="font-bold text-slate-900">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Central GST (9%) + State GST (9%):</span>
                    <span className="font-bold text-slate-500">₹{gst}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Courier Delivery ({stateDelivery}):</span>
                    {deliveryCost === 0 ? (
                      <span className="text-emerald-600 font-extrabold uppercase text-[10px] tracking-wider">Free Shipping</span>
                    ) : (
                      <span className="font-bold text-slate-900">₹{deliveryCost}</span>
                    )}
                  </div>

                  <div className="h-px bg-slate-200 my-4" />

                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-widest">Grand Estimated Cost</span>
                      <span className="text-[9px] text-slate-400 font-medium">Inclusive of all local paper duties</span>
                    </div>
                    <span className="text-2xl font-black text-blue-600">₹{grandTotal}</span>
                  </div>
                </div>

                {/* Eco Friendly indicator */}
                <div className="mt-8 pt-6 border-t border-slate-200 flex gap-3 relative z-10">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl shrink-0 self-start">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    AxoPrint runs on 100% solar power matrices. All materials used carry FSC-forest standard approvals and zero plastic derivatives.
                  </p>
                </div>
              </div>
            </aside>
          </motion.div>
        ) : (
          /* Order Confirmation Invoice overlay */
          <motion.div
            key="order-success-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            id="order-success-modal"
            className="max-w-2xl mx-auto px-4 sm:px-6"
          >
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-[36px] shadow-2xl text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Order Registered Successfully!</h3>
                <p className="text-xs text-slate-500">Your design proof has been parsed and sent to our production queue.</p>
              </div>

              {/* Receipt detail */}
              <div className="p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-900 text-left space-y-3.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-semibold">Registered Order ID:</span>
                  <span className="font-extrabold text-blue-600 dark:text-blue-400">{orderSuccess}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-semibold">Configured Product:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{product}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-semibold">Quantity:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{quantity} Units</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-semibold">Paper Grade:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{paperType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-semibold">Address:</span>
                  <span className="font-bold text-slate-900 dark:text-white truncate max-w-[200px]">{address}</span>
                </div>
                <div className="flex justify-between pt-2.5 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 font-black">Estimated Billing:</span>
                  <span className="font-black text-slate-900 dark:text-white">₹{grandTotal}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  id="go-track-btn"
                  onClick={() => setActiveTab('portal')}
                  className="w-full py-3 bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-white dark:text-slate-200 text-xs font-bold rounded-xl transition-all"
                >
                  Track Order Timeline
                </button>
                <button
                  id="order-another-btn"
                  onClick={handleResetForm}
                  className="w-full py-3 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold rounded-xl transition-all"
                >
                  Estimate Another Product
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
