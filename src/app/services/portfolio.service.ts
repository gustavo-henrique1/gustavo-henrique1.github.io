import { Injectable } from "@angular/core";
import { environment } from "@environment/environment";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  increment,
  getDoc,
} from "firebase/firestore";

const app = initializeApp(environment.firebase);
const firestore = getFirestore(app);

@Injectable({
  providedIn: "root",
})
export class PortfolioService {
  private projectsCollection = collection(firestore, "projects");

  constructor() {}

  async getProjects(): Promise<any[]> {
    try {
      const querySnapshot = await getDocs(this.projectsCollection);
      return querySnapshot.docs.map((doc) => doc.data());
    } catch (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
  }

  async getProjectById(projectId: string): Promise<any> {
    try {
      const projectDocRef = doc(firestore, `projects/${projectId}`);
      const projectDoc = await getDoc(projectDocRef);

      if (projectDoc.exists()) {
        return { id: projectDoc.id, ...projectDoc.data() };
      } else {
        throw new Error("Project not found");
      }
    } catch (error) {
      console.error("Error fetching project by ID:", error);
      throw error;
    }
  }

  async incrementLikes(projectId: string): Promise<void> {
    try {
      if (!projectId) {
        throw new Error("Invalid project ID");
      }

      const projectDoc = doc(firestore, `projects/${projectId}`);
      await updateDoc(projectDoc, {
        likes: increment(1),
      });
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  }

  async removeLike(projectId: string): Promise<void> {
    try {
      if (!projectId) {
        throw new Error("Invalid project ID");
      }

      const projectDoc = doc(firestore, `projects/${projectId}`);
      await updateDoc(projectDoc, {
        likes: increment(-1),
      });
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  }
}
