// src/components/RegisterModal.jsx
import React, { useState } from 'react';
import '../styles/components/RegisterModal.css';

const RegisterModal = ({ isOpen, onClose }) => {
  // Remove "مركز" from options except for مدينة المنيا الجديدة
  const allowedDistricts = [
    "العدوة",
    "مغاغة",
    "بني مزار",
    "مطاي",
    "سمالوط",
    "أبو قرقاص",
    "ملوي",
    "ديرمواس",
    "مدينة المنيا الجديدة",
    "مدينة المنيا"
  ];

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

    if (!formData.district) {
      newErrors.district = 'اختر المركز';
    } else if (!allowedDistricts.includes(formData.district)) {
      newErrors.district = 'المركز غير صالح';
    }

    if (!formData.school) newErrors.school = 'اسم المدرسة مطلوب';

    if (!formData.age) {
      newErrors.age = 'العمر مطلوب';
    } else {
      const ageNum = Number(formData.age);
      if (isNaN(ageNum)) {
        newErrors.age = 'العمر يجب أن يكون رقم';
      } else if (ageNum < 1 || ageNum > 99) {
        newErrors.age = 'العمر يجب أن يكون بين 1 و 99';
      }
    }

    if (!formData.phone) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else {
      const phonePattern = /^[0-9]{7,15}$/;
      if (!phonePattern.test(formData.phone)) {
        newErrors.phone = 'رقم الهاتف غير صالح';
      }
    }

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

    const formDataToSend = new FormData();
    formDataToSend.append("entry.241952885", formData.name);
    formDataToSend.append("entry.138042089", formData.district);
    formDataToSend.append("entry.1496020668", formData.school);
    formDataToSend.append("entry.1241044717", formData.age);
    formDataToSend.append("entry.1798091748", formData.phone);
    formDataToSend.append("entry.1996538401", formData.gender);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScZaDx6TIBNIiReZ2VFECIBddMEPzxHIGPBW8i0AQ9hPaQ8Fg/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      }
    )
      .then(() => {
        alert("تم الإرسال بنجاح!");
        onClose();
        setFormData({
          name: '',
          district: '',
          school: '',
          age: '',
          phone: '',
          gender: '',
        });
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
            المركز:
            <select name="district" value={formData.district} onChange={handleChange}>
              <option value="">اختر المركز</option>
              {allowedDistricts.map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
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
