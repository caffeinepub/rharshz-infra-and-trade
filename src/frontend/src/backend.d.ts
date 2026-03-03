import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Service {
    id: bigint;
    title: string;
    icon: string;
    description: string;
    category: string;
}
export interface Property {
    id: bigint;
    title: string;
    bedrooms: bigint;
    area: bigint;
    description: string;
    imageTag: string;
    bathrooms: bigint;
    price: bigint;
    location: string;
}
export type Time = bigint;
export interface FormSubmission {
    id: bigint;
    projectType: string;
    name: string;
    email: string;
    message: string;
    preferredDate: string;
    timestamp: Time;
    phone: string;
}
export interface backendInterface {
    addFormSubmission(name: string, email: string, phone: string, projectType: string, preferredDate: string, message: string): Promise<bigint>;
    addProperty(title: string, location: string, price: bigint, description: string, bedrooms: bigint, bathrooms: bigint, area: bigint, imageTag: string): Promise<bigint>;
    addService(title: string, description: string, icon: string, category: string): Promise<bigint>;
    getAllFormSubmissions(): Promise<Array<FormSubmission>>;
    getAllProperties(): Promise<Array<Property>>;
    getAllServices(): Promise<Array<Service>>;
    seedSampleData(): Promise<void>;
}
