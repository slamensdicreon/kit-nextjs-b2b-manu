/**
 * Utilities for parsing and handling AI-generated JSON responses
 * from the Sitecore AI services.
 */

export interface AIResponse<T = unknown> {
  success: boolean;
  data: T | null;
  error?: string;
}

/** Safely parse an AI JSON response with error handling */
export function parseAIResponse<T>(raw: string): AIResponse<T> {
  try {
    const data = JSON.parse(raw) as T;
    return { success: true, data };
  } catch {
    return { success: false, data: null, error: 'Failed to parse AI response' };
  }
}

/** Extract structured data from an AI response that may contain markdown code blocks */
export function extractJSONFromMarkdown<T>(markdown: string): AIResponse<T> {
  const jsonMatch = markdown.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);
  if (jsonMatch && jsonMatch[1]) {
    return parseAIResponse<T>(jsonMatch[1].trim());
  }
  return parseAIResponse<T>(markdown);
}

/** Validate that an AI response contains the expected fields */
export function validateAIFields<T extends Record<string, unknown>>(
  data: T,
  requiredFields: (keyof T)[]
): boolean {
  return requiredFields.every(
    (field) => data[field] !== undefined && data[field] !== null
  );
}
