import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8DbOxDqawAt5pmIT7tW2ras76UBDdifo",
  authDomain: "sairamcomputerapp.firebaseapp.com",
  projectId: "sairamcomputerapp",
  storageBucket: "sairamcomputerapp.appspot.com",
  messagingSenderId: "197160044288",
  appId: "1:197160044288:web:91389a83c0850481df95e5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// FCM Token Firestore मध्ये save करा
const saveTokenToFirestore = async (token: string) => {
  try {
    await setDoc(doc(db, "fcmTokens", token), {
      token,
      platform: 'android',
      createdAt: new Date().toISOString()
    });
    console.log("✅ FCM Token saved");
  } catch (error) {
    console.error("❌ Token save error:", error);
  }
};

// Android Native Notification Permission
export const requestNotificationPermission = async () => {
  try {
    // Android Capacitor मध्ये native permission request
    if ((window as any).Capacitor && (window as any).Capacitor.isNativePlatform()) {
      // Native Android - FCM plugin वापरा
      const { PushNotifications } = await import('@capacitor/push-notifications');
      
      // Permission request करा
      const permResult = await PushNotifications.requestPermissions();
      console.log('Push permission result:', permResult);
      
      if (permResult.receive === 'granted') {
        // FCM register करा
        await PushNotifications.register();
        console.log('✅ Push notifications registered');
        
        // Token मिळवा
        PushNotifications.addListener('registration', async (token) => {
          console.log('📱 FCM Token:', token.value);
          await saveTokenToFirestore(token.value);
        });

        // Notification आल्यावर foreground मध्ये दाखवा
        PushNotifications.addListener('pushNotificationReceived', (notification) => {
          console.log('🔔 Notification received:', notification);
          // App उघडे असताना alert दाखवा
          if (notification.title) {
            showInAppPopup(notification.title, notification.body || '');
          }
        });

        // Notification वर click केल्यावर
        PushNotifications.addListener('pushNotificationActionPerformed', (action) => {
          console.log('👆 Notification clicked:', action);
        });

      } else {
        console.log('❌ Permission denied');
      }
      
    } else {
      // Web browser साठी
      if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          console.log('✅ Web notification permission granted');
        }
      }
    }
  } catch (error) {
    console.error("❌ Notification setup error:", error);
  }
};

// In-app popup दाखवा
const showInAppPopup = (title: string, body: string) => {
  const popup = document.createElement('div');
  popup.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #1e293b;
    color: white;
    padding: 16px 20px;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    z-index: 99999;
    max-width: 90%;
    width: 340px;
    border-left: 4px solid #f97316;
    animation: slideDown 0.4s ease;
  `;
  popup.innerHTML = `
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <div style="font-size:24px;">🔔</div>
      <div style="flex:1;">
        <div style="font-weight:800;font-size:13px;margin-bottom:4px;">${title}</div>
        <div style="font-size:12px;opacity:0.8;line-height:1.4;">${body}</div>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:white;font-size:18px;cursor:pointer;padding:0;opacity:0.6;">✕</button>
    </div>
  `;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 5000);
};
