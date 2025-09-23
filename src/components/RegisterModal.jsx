// src/components/RegisterModal.jsx
import React, { useState } from 'react';
import '../styles/components/RegisterModal.css';

const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    district: '',
    school: '',
    age: '',
    phone: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'الاسم مطلوب';
    if (!formData.district) newErrors.district = 'اختر المنطقة';
    if (!formData.school) newErrors.school = 'اسم المدرسة مطلوب';
    if (!formData.age) newErrors.age = 'العمر مطلوب';
    if (!formData.phone) newErrors.phone = 'رقم الهاتف مطلوب';
    if (!formData.gender) newErrors.gender = 'اختر النوع';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Map your formData to Google Form entry IDs
    const formDataToSend = new FormData();
    formDataToSend.append("entry.241952885", formData.name);       // الاسم
    formDataToSend.append("entry.138042089", formData.district);   // المنطقة
    formDataToSend.append("entry.1496020668", formData.school);    // اسم المدرسة
    formDataToSend.append("entry.1241044717", formData.age);       // العمر
    formDataToSend.append("entry.1798091748", formData.phone);     // رقم الهاتف
    formDataToSend.append("entry.1996538401", formData.gender);    // النوع

    // Google Form POST endpoint
    fetch("https://docs.google.com/forms/d/e/1FAIpQLScZaDx6TIBNIiReZ2VFECIBddMEPzxHIGPBW8i0AQ9hPaQ8Fg/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: formDataToSend
    })
      .then(() => {
        alert("تم الإرسال بنجاح!");
        onClose(); // close modal
        setFormData({
          name: '',
          district: '',
          school: '',
          age: '',
          phone: '',
          gender: '',
        }); // clear form
      })
      .catch((err) => alert("حدث خطأ: " + err));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        <h2>تسجيل</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label>
            الاسم:
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="ادخل اسمك"
              onChange={handleChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </label>

          <label>
            المنطقة:
            <select name="district" value={formData.district} onChange={handleChange}>
              <option value="">اختر المنطقة</option>
              <option value="مغاغة">مغاغة</option>
              <option value="سمالوط شرق">سمالوط شرق</option>
              <option value="سمالوط غرب">سمالوط غرب</option>
              <option value="ملوي">ملوي</option>
              <option value="قسم أول المنيا">قسم أول المنيا</option>
              <option value="قسم ثان المنيا">قسم ثان المنيا</option>
              <option value="قسم ثالث المنيا">قسم ثالث المنيا</option>
              <option value="المنيا الجديدة">المنيا الجديدة</option>
              <option value="أبو قرقاص">أبو قرقاص</option>
              <option value="بني مزار">بني مزار</option>
              <option value="ديروط">ديروط</option>
              <option value="العُدوة">العُدوة</option>
              <option value="مطاي">مطاي</option>
            </select>
            {errors.district && <div className="error">{errors.district}</div>}
          </label>

          <label>
            اسم المدرسة:
            <input
              type="text"
              name="school"
              value={formData.school}
              placeholder="ادخل اسم المدرسة"
              onChange={handleChange}
            />
            {errors.school && <div className="error">{errors.school}</div>}
          </label>

          <label>
            العمر:
            <input
              type="number"
              name="age"
              value={formData.age}
              placeholder="ادخل العمر"
              onChange={handleChange}
            />
            {errors.age && <div className="error">{errors.age}</div>}
          </label>

          <label>
            رقم الهاتف:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="ادخل رقم الهاتف"
              onChange={handleChange}
            />
            {errors.phone && <div className="error">{errors.phone}</div>}
          </label>

          <label>
            النوع:
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">اختر النوع</option>
              <option value="ذكر">ذكر</option>
              <option value="أنثى">أنثى</option>
            </select>
            {errors.gender && <div className="error">{errors.gender}</div>}
          </label>

          <button type="submit">إرسال</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
