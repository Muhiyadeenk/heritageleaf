import { WHATSAPP_NUMBER, BRAND } from "../config";

export const formatINR = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

export function cartTotal(items) {
  return items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

export function buildOrderMessage(customer, items) {
  const lines = items.map(
    (i, idx) =>
      `${idx + 1}. ${i.name} (${i.weight}) x ${i.qty} – ${formatINR(i.price)} each = ${formatINR(i.price * i.qty)}`
  );
  const parts = [
    `*New Order – ${BRAND.name}*`,
    "",
    "*Customer Details*",
    `Name: ${customer.name}`,
    `Mobile: ${customer.mobile}`,
    `Address: ${customer.address}, ${customer.city} - ${customer.pin}`,
  ];
  if (customer.notes?.trim()) parts.push(`Notes: ${customer.notes.trim()}`);
  parts.push("", "*Order Items*", ...lines, "", `*Total Amount: ${formatINR(cartTotal(items))}*`, "", "Please confirm availability, delivery charges and payment details. Thank you!");
  return parts.join("\n");
}

export function whatsappUrl(message, number = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message, number = WHATSAPP_NUMBER) {
  const url = whatsappUrl(message, number);
  const win = window.open(url, "_blank", "noopener");
  if (!win) window.location.href = url; // popup blocked fallback
}

export const generalChatUrl = (text = `Hello ${BRAND.name}, I'd like to know more about your teas.`) =>
  whatsappUrl(text);
