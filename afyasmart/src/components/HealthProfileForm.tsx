import React, { useState } from 'react';
import { HealthProfile } from '../types';

interface HealthProfileFormProps {
  onSubmit: (profile: HealthProfile) => void;
}

const HealthProfileForm: React.FC<HealthProfileFormProps> = ({ onSubmit }) => {
  const [profile, setProfile] = useState<HealthProfile>({
    age: 0,
    sex: 'prefer-not-say',
    height: { value: 0, unit: 'cm' },
    weight: { value: 0, unit: 'kg' },
    helpType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(profile);
  };

  const helpTypes = [
    'Help with symptoms / pain',
    'Physical activity recommendations',
    'Chronic condition support'
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Briefly describe your health profile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Age
              </label>
              <input
                type="number"
                min="0"
                max="120"
                value={profile.age || ''}
                onChange={(e) => setProfile({ ...profile, age: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Sex
              </label>
              <select
                value={profile.sex}
                onChange={(e) => setProfile({ ...profile, sex: e.target.value as HealthProfile['sex'] })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="prefer-not-say">Prefer not to say</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Height
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  min="0"
                  value={profile.height.value || ''}
                  onChange={(e) => setProfile({
                    ...profile,
                    height: { ...profile.height, value: parseInt(e.target.value) || 0 }
                  })}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500"
                  required
                />
                <select
                  value={profile.height.unit}
                  onChange={(e) => setProfile({
                    ...profile,
                    height: { ...profile.height, unit: e.target.value as 'cm' | 'ft' }
                  })}
                  className="w-20 px-2 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500"
                >
                  <option value="cm">cm</option>
                  <option value="ft">ft</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Weight
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  min="0"
                  value={profile.weight.value || ''}
                  onChange={(e) => setProfile({
                    ...profile,
                    weight: { ...profile.weight, value: parseInt(e.target.value) || 0 }
                  })}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500"
                  required
                />
                <select
                  value={profile.weight.unit}
                  onChange={(e) => setProfile({
                    ...profile,
                    weight: { ...profile.weight, unit: e.target.value as 'kg' | 'lbs' }
                  })}
                  className="w-20 px-2 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500"
                >
                  <option value="kg">kg</option>
                  <option value="lbs">lbs</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
              What kind of help do you need?
            </label>
            <div className="space-y-3">
              {helpTypes.map((type) => (
                <div key={type} className="flex items-center">
                  <input
                    type="radio"
                    id={type}
                    name="helpType"
                    value={type}
                    checked={profile.helpType === type}
                    onChange={(e) => setProfile({ ...profile, helpType: e.target.value })}
                    className="w-4 h-4 text-teal-500 border-gray-300 focus:ring-teal-500"
                    required
                  />
                  <label htmlFor={type} className="ml-3 text-gray-700 dark:text-gray-300">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              Start health analysis with AfyaSmart
            </button>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              🔒 Your data is confidential and not stored
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HealthProfileForm;