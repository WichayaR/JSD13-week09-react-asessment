# React Assessment

## 1. Explain how and why you divided the app’s UI into components
* Navbar: แยกเป็น Home กับ Owner 
* Table: สร้างเป็น Reusable Component รับ props (members, isAdmin, handleDelete) เพื่อแสดงผลตาราง ทำให้ไม่ต้องเขียนcodeตาราง ซ้ำซ้อนระหว่างฝั่ง User และ Admin
* UserHome & AdminHome: แยกมุมมองของ user และ admin ออกจากกันอย่างชัดเจน โดย AdminHome จะมีส่วน Form ในการเพิ่มข้อมูลผู้ใช้งานเข้ามาเพิ่มเติม
* Home & Owner: จัดการภาพรวมและ Layout ของแต่ละ Route

## 2. What state variables did you created and why?
* members (ใน Home.jsx): เก็บข้อมูลรายชื่อผู้ใช้งานทั้งหมดที่ดึงมาจาก MockAPI ในรูปแบบ Array of Objects เพื่อนำไปกระจายแสดงผลในตาราง
* sector (ใน Home.jsx): เก็บสถานะโหมดการแสดงผลของหน้า Home ('default', 'user', หรือ 'admin') เพื่อใช้ทำ Conditional Rendering สลับ View และ Header ข้อความตามปุ่มที่ผู้ใช้กด
* name, lastname, position (ใน AdminHome.jsx): เก็บข้อมูล Input แต่ละช่องของ Form เพื่อทำเป็น Controlled Components ก่อนที่จะส่งข้อมูลไปสร้างเป็น Member ใหม่

## 3. How did you manage these states? Was it via Passing Props or React Context, why?
##### เลือกจัดการ State ผ่าน Passing Props และ Callback Functions เพราะ
* 1.โครงสร้างของ Component ไม่ได้ซับซ้อนมาก (เช่น Home => AdminHome => Table)
* 2.การส่ง Props โดยตรงมีความตรงไปตรงมา ไม่เกิดปัญหา Prop Drilling ที่ซับซ้อนเกินไป
* 3.ไม่จำเป็นต้องใช้ React Context เนื่องจากแอปพลิเคชันมีขนาดเล็ก

## 4. Explain how and why you used the useEffect hook?
##### Why ?
* ใช้สำหรับจัดการ Side Effects คือการติดต่อสื่อสารกับExternal API เพื่อให้ได้ข้อมูลมาตั้งแต่เริ่มต้น
##### How ?
* เรียกใช้ useEffect ในหน้า Home.jsx พร้อมกำหนด Dependency Array เป็น Array ว่าง [] เพื่อสั่งให้ฟังก์ชัน getData() ทำงานเพียงครั้งเดียวหลังจาก Component ถูก Render ขึ้นหน้าจอครั้งแรก เพื่อป้องกันการเกิด Infinite Loop

## 5. Explain whether you could and why, you would use fetch() without using useEffect?
* ใช้ fetch() นอก useEffect ได้เวลาที่เกิด Event ของ User เช่น ตอนกดปุ่ม Save (POST) หรือกดปุ่ม Delete (DELETE) เพราะ code จะทำงานแค่ตอน user กดปุ่มเท่านั้น แต่ห้ามเอา fetch() ไปเขียนวางไว้ในตัว Component ตรงๆ โดยไม่ครอบ useEffect เด็ดขาด เพราะเวลามีการ Re-render ตัว Component จะยิงดึงข้อมูลใหม่เรื่อยๆ จนเกิดInfinite loopได้

## 6. Explain whether the use of fetch() should be synchronous or asynchronous JavaScript, why?
* การยิง API ไปดึงข้อมูลจาก Server ต้องใช้เวลาโหลด ถ้าเราเขียนเป็น Synchronous ตัว JavaScript จะหยุดรอจนกว่าข้อมูลจะมา ส่งผลให้หน้าเว็บค้างทันที (UI Freeze) กดอะไรไม่ได้เลย ดังนั้นต้องใช้ Async เพื่อให้หน้าเว็บยังทำงานและกดปุ่มอื่นๆ ต่อได้ระหว่างรอข้อมูล

## 7. Include any other notes about React and Frontend Web Development you want to use to summarize your understanding of this technical domain. You can also note down questions you have.
* React Router: ทำให้เปลี่ยนหน้า Home กับ Owner ได้เร็วขึ้นมาก ไม่ต้องรอ Browser Refreshใหม่ทั้งหน้าเว็บเหมือนเว็บสมัยก่อน
* Controlled Components: การเอา State มาคุมช่อง Input ทำให้เราเช็กข้อมูลได้ง่าย เช่น เช็กว่าพิมพ์ครบทุกช่องหรือยังก่อนจะส่งข้อมูลไปบันทึก
* Tailwind CSS: ใช้ง่ายไม่ต้องเสียเวลาไปเขียน CSS Selector หรือสลับไฟล์ CSS ไปมากับตัว JSX ที่เรากำลังเขียนอยู่


